
import * as modRequestBase from "./base";
import { ipcRenderer } from "electron";

export { URequestResponse, URequestResponseExts, UCallbackSuccess, UCallbackFailure } from "./base";



type UFormatSuccess = ( channel: string, path: string, response: modRequestBase.URequestResponse ) => void;
type UFormatFailure = ( channel: string, path: string, errCode: number, errText: string ) => void;

type UOptions =
{
    $Channel?: string,
    $Controller?: string,
    $Action?: string,
    $Log?: boolean,
    $FormatSuccess?: UFormatSuccess,
    $FormatFailure?: UFormatFailure,
}

// HTTP控制器请求方法类型
type UExecuteFunction = Function & UOptions;

export interface IIpcContext
{
    data?: any;
}


export class CController
{

    protected Execute( method: UExecuteFunction, ...args: any[] )
    {
        let constructor: UExecuteFunction = this["__proto__"]["constructor"];
    
        let channel = constructor.$Channel;
        if ( channel == null )
        {
            console.error( "no channel" );
            return;
        }
    
        // 通过ApiController修饰绑定控制器名字
        let controllerName: string = constructor.$Controller;
        if ( controllerName == null )
        {
            console.error( "It's not a standard controller." );
            return;
        }
    
        
        let path = "";
        let actionName = method.name;
    
        // 获取Action行为
        if ( method.$Action != null )
        {
            actionName = method.$Action;
        }
    
        // 更新Route路由
        path = `${controllerName}/${actionName}`;
    
        let request: IIpcContext = {};
    
        request.data = undefined;
        // if ( method.$Log )
        // {
        //     request.SuccessCallbacks.Add( new iberbar.System.TCallback( function( this: IRequest, response )
        //     {
        //         let logText = method.$HttpLogFormatSuccess( this, response );
        //         if ( response.code < 0 )
        //             console.warn( logText );
        //         else
        //             console.info( logText );
        //     }, this ));
        //     request.FailureCallbacks.Add( new iberbar.System.TCallback( function( this: IRequest, errCode, errText )
        //     {
        //         console.error( method.$HttpLogFormatFailure( this, errCode, errText ) );
        //     }, this ) );
        // }
        method.apply( this, args );
    
        // 通用处理PostData数据
        // if ( constructor.$RequestPrevSend )
        // {
        //     constructor.$RequestPrevSend( request );
        // }
        // if ( method.$RequestPrevSend )
        // {
        //     constructor.$RequestPrevSend( request );
        // }
    
        ipcRenderer.send( channel, path, request.data );
    }
};


/**
 * 修饰器 - 重置请求的Action
 * @param action 请求Action
 */
export function ActionName( action: string )
{
    return function( target: any, method: string, descriptor: PropertyDescriptor )
    {
        (<UExecuteFunction>descriptor.value).$Action = action;
    }
}

/**
 * 修饰器
 * @param host 
 */
export function ChannelName( channel: string )
{
    return function( target: any, method?: string, descriptor?: PropertyDescriptor )
    {
        if ( descriptor == undefined )
        {
            (<UExecuteFunction>target).$Channel = channel;
        }
        else
        {
            (<UExecuteFunction>descriptor.value).$Channel = channel;
        }
    }
}

/**
 * 修饰器 - 开启禁止日志打印功能
 * @param enable 开启或禁止
 * @param formatSuccess 请求成功的日志打印格式
 * @param formatFailure 请求失败的日志打印格式
 */
export function Log(
    enable: boolean = true,
    formatSuccess?: UFormatSuccess,
    formatFailure?: UFormatFailure )
{
    function __DefaultSuccess( channel:string, path: string, response: modRequestBase.URequestResponse ): string
    {
        if ( response.code < 0 )
            console.warn( "Controller.Execute Success:\nchannel=%s, path=%s,\nresponse=%O", channel, path, response );
        else
            console.info( "Controller.Execute Success:\nchannel=%s, path=%s,\nresponse=%O", channel, path, response );
        return ;
    }

    function __DefaultFailure( channel:string, path: string, errCode: number, errText: string )
    {
        return console.error( "Controller.Execute Failure:\nchannel=%s, path=%s,\nerrCode=%d,\nerrText=%s", channel, path, errCode, errText );
    }

    return function (target, method: string, descriptor: PropertyDescriptor)
    {
        descriptor.value.$Log = enable;
        if ( enable == true )
        {
            (<UExecuteFunction>descriptor.value).$FormatSuccess = ( formatSuccess == null ) ? __DefaultSuccess : formatSuccess;
            (<UExecuteFunction>descriptor.value).$FormatFailure = ( formatFailure == null ) ? __DefaultFailure : formatFailure;
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



export function IpcSender(): iberbar.System.UDecoratorFunctionType_ForMethod
{
    return  function (target: any, methodName: string, descriptor: PropertyDescriptor)
    {
        let methodOld = descriptor.value;
        if ( methodOld.$HttpAction == null )
            methodOld.$HttpAction = methodName;
            
        descriptor.value = function( ...args: any[] )
        {
            this.Execute( methodOld, ...args );
        }

        return descriptor;
    }
}


