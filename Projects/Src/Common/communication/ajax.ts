
import * as modRequestBase from "./request";

export { URequestResponse, URequestResponseExts, UCallbackSuccess, UCallbackFailure } from "./request";


type UHttpOptions =
{
    $RequestTypeInjection?: typeof modRequestBase.IRequest
    $HttpMethod?: "GET" | "POST";
    $Route?: string,
    $HttpController?: string,
    $HttpHost?: string,
    $HttpArea?: string,
    $HttpAction?: string,
    $HttpTimeout?: number,
    $HttpLog?: boolean,
    $HttpLogFormatSuccess?: ( request: modRequestBase.IRequest, response: modRequestBase.URequestResponse ) => void,
    $HttpLogFormatFailure?: ( request: modRequestBase.IRequest, errCode: number, errText: string ) => void,
}

// HTTP控制器请求方法类型
type UHttpFunction = Function & UHttpOptions;


// HTTP控制器父类
export class CController
{
    protected m_request: modRequestBase.IRequest = undefined;

    @DeclaringType( TypeOf( modRequestBase.IRequest ) )
    protected set Request( value: modRequestBase.IRequest )
    {
        this.m_request = value;
    }

    protected Execute( method: UHttpFunction, ...args: any[] )
    {
        let constructor: UHttpFunction = this["__proto__"]["constructor"];

        // 通过类名获取控制器名称
        // 在混淆代码后不能使用
        // let className: string = constructor["name"];
        // let match = className.match( /(.*?)Controller/ );
        // if ( match.length != 2 )
        // {
        //     console.error( "It's not a standard controller." );
        //     return;
        // }
        // const controllerName = match[ 1 ];

        // 通过ApiController修饰绑定控制器名字
        let controllerName: string = constructor.$HttpController;
        if ( controllerName == null )
        {
            console.error( "It's not a standard controller." );
            return;
        }

        // 注入Request实例失败
        if ( this.m_request == null )
        {
            console.error( `No implement for IRequest. Do you forgot to register controller<${controllerName}> into ioc? Or use new instead of resolving? Or set PropertiesAutowired? ` );
            return;
        }

        let route = "";
        let area = null;
        let action = null;

        // 获取Route路由模板
        if ( method.$Route == undefined )
        {
            route = RouteGet( this );
            if ( route == undefined )
                route = "/api/[controller]/[action]";
        }
        else
        {
            route = method.$Route;
        }

        // 获取Area区域
        if ( method.$HttpArea != null )
        {
            area = method.$HttpArea;
        }
        else if ( constructor.$HttpArea != null )
        {
            area = constructor.$HttpArea;
        }

        // 获取Action行为
        if ( method.$HttpAction != null )
        {
            action = method.$HttpAction;
        }

        // 更新Route路由
        route = route.replace( /\[area\]/, ( area == null ) ? "" : area );
        route = route.replace( /\[controller\]/, controllerName );
        route = route.replace( /\[action\]/, ( action == null ) ? method.name : action );

        // 获取Host
        let url = route;
        if ( method.$HttpHost != null )
        {
            url = method.$HttpHost + url;
        }
        else if ( constructor.$HttpHost != null )
        {
            url = constructor.$HttpHost + url;
        }

        this.m_request.method = method.$HttpMethod;
        this.m_request.timeout = method.$HttpTimeout;
        this.m_request.async = true;
        this.m_request.contentType = 'application/json';
        this.m_request.data = undefined;
        this.m_request.url = url;
        if ( method.$HttpLog )
        {
            this.m_request.SuccessCallbacks.Add( new iberbar.System.TCallback( function( this: modRequestBase.IRequest, response )
            {
                let logText = method.$HttpLogFormatSuccess( this, response );
                if ( response.code < 0 )
                    console.warn( logText );
                else
                    console.info( logText );
            }, this ));
            this.m_request.FailureCallbacks.Add( new iberbar.System.TCallback( function( this: modRequestBase.IRequest, errCode, errText )
            {
                console.error( method.$HttpLogFormatFailure( this, errCode, errText ) );
            }, this ) );
        }
        method.apply( this, args );

        // 通用处理PostData数据
        this.__CommonFixRequest();
        // if ( this.m_request.contentType == "application/json" )
        //     this.m_request.data = JSON.stringify( this.m_request.data );

        // 发送请求
        this.m_request.Send();
    }

    protected __CommonFixRequest()
    {
    }

    protected static Readonly()
    {
        // readonly修饰函数，对方法进行只读操作
        return function ( target, methodName, descriptor: PropertyDescriptor )
        {
            descriptor.writable = false;
            return descriptor;
        }
    }
};






/**
 * 修饰器 - HTTP请求，带有该修饰器的方法将被重载，用于执行HTTP请求
 * @param http_method 
 */
export function Http( httpMethod: "GET" | "POST" )
{
    return function (target: any, methodName: string, descriptor: PropertyDescriptor)
    {
        let methodOld = descriptor.value;
        methodOld.$HttpMethod = httpMethod;
        //methodOld.$HttpTimeout = 10000;
        if ( methodOld.$HttpAction == null )
            methodOld.$HttpAction = methodName;
            
        descriptor.value = function(...args)
        {
            args.splice( 0, 0, methodOld );
            target[ "Execute" ].apply( this, args );
        }

        return descriptor;
    }
}


/**
 * 修饰器 - HTTP POST请求，带有该修饰器的方法将被重载，用于执行HTTP请求
 */
export function HttpPost()
{
    return Http( "POST" );
}


/**
 * 修饰器 - 重置请求的地址，默认地址为 /api/[controller]/[action]
 * 
 * 可正则替换[area]、[controller]和[action]
 * @param http_route 请求地址
 */
export function Route( template: string )
{
    return function (target, method?: string, descriptor?: PropertyDescriptor)
    {
        if ( descriptor == undefined )
        {
            target.$Route = template;
        }
        else
        {
            descriptor.writable = false;
            descriptor.value.$Route = template;
        }
    };
}

/**
 * 修饰器
 * @param host 
 */
export function Area( area: string )
{
    return function( target: any, method?: string, descriptor?: PropertyDescriptor )
    {
        if ( descriptor == undefined )
        {
            (<UHttpFunction>target).$HttpArea = area;
        }
        else
        {
            (<UHttpFunction>descriptor.value).$HttpArea = area;
        }
    }
}

export function ApiController( controllerName: string )
{
    return function( target: any )
    {
        (<UHttpFunction>target).$HttpController = controllerName;
    }
}

/**
 * 修饰器 - 重置请求的Action
 * @param action 请求Action
 */
export function ActionName( action: string )
{
    return function( target: any, method: string, descriptor: PropertyDescriptor )
    {
        (<UHttpFunction>descriptor.value).$HttpAction = action;
    }
}

/**
 * 修饰器
 * @param host 
 */
export function HostName( host: string )
{
    return function( target: any, method?: string, descriptor?: PropertyDescriptor )
    {
        if ( descriptor == undefined )
        {
            (<UHttpFunction>target).$HttpHost = host;
        }
        else
        {
            (<UHttpFunction>descriptor.value).$HttpHost = host;
        }
    }
}

export function RouteGet( target: any, propertyKey?: string ): string
{
    // if ( propertyKey == undefined )
    //     return Reflect.getMetadata( "$Route", target, "constructor" );
    // return Reflect.getMetadata( "$Route", target, propertyKey );
    return target[ "__proto__" ][ "constructor" ][ "$Route" ];
}

/**
 * 修饰器 - 开启禁止日志打印功能
 * @param enable 开启或禁止
 * @param formatSuccess 请求成功的日志打印格式
 * @param formatFailure 请求失败的日志打印格式
 */
export function HttpLog(
    enable: boolean = true,
    formatSuccess?: ( request: modRequestBase.IRequest, response: modRequestBase.URequestResponse ) => string,
    formatFailure?: ( request: modRequestBase.IRequest, errCode: number, errText: string ) => string )
{
    function __DefaultSuccess( request: modRequestBase.IRequest, response: modRequestBase.URequestResponse ): string
    {
        if ( response.code < 0 )
            console.warn( "Controller.Execute Success:\nurl=%s,\nresponse=%O", request.url, response );
        else
            console.info( "Controller.Execute Success:\nurl=%s,\nresponse=%O", request.url, response );
        return ;
    }

    function __DefaultFailure( request: modRequestBase.IRequest, errCode: number, errText: string )
    {
        return console.error( "Controller.Execute Failure:\nurl=%s,\nerrCode=%d,\nerrText=%s", request.url, errCode, errText );
    }

    return function (target, method: string, descriptor: PropertyDescriptor)
    {
        descriptor.value.$HttpLog = enable;
        if ( enable == true )
        {
            (<UHttpFunction>descriptor.value).$HttpLogFormatSuccess = ( formatSuccess == null ) ? __DefaultSuccess : formatSuccess;
            (<UHttpFunction>descriptor.value).$HttpLogFormatFailure = ( formatFailure == null ) ? __DefaultFailure : formatFailure;
        }
        return descriptor;
    }
}


/**
 * 修饰器 - 设置HTTP请求超时时间
 * @param timeout 
 */
export function Timeout( timeout: number )
{
    return function( target, method: string, descriptor: PropertyDescriptor )
    {
        descriptor.value.$HttpTimeout = timeout;
        return descriptor;
    }
}


/**
 * 修饰器 - 注入Request实现类型
 * @param type 
 */
export function RequestTypeInjection( type: typeof modRequestBase.IRequest )
{
    return function( target, method?: string, descriptor?: PropertyDescriptor )
    {
        if ( descriptor == null )
        {
            (<UHttpFunction>target).$RequestTypeInjection = type;
        }
        else
        {
            (<UHttpFunction>descriptor.value).$RequestTypeInjection = type;
        }
    }
}




