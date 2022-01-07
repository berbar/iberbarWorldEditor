



/**
 * 请求响应拓展结构
 */
export type URequestResponseExts = {};


export type URequestResponseErro =
{
    text: string
};

/**
 * 请求响应数据结构
 */
export type URequestResponse< TData = any, TErro extends {} = {}, TExts extends URequestResponseExts = URequestResponseExts > =
{
    code: number,
    data: TData,
    erro: TErro & URequestResponseErro
    exts: TExts
};

/**
 * 回调函数 - 请求成功并获得数据
 */
export type UCallbackSuccessFunction< TResponse = URequestResponse > = ( this: any, response: TResponse ) => void;


/**
 * 回调函数 - 请求失败
 */
export type UCallbackFailureFunction = ( this: any, errCode: number, errText: string ) => void;

/**
 * 回调结构 - 请求成功并获得数据
 */
export type UCallbackSuccess< TResponse = any > = iberbar.System.TCallbackOrFunction< UCallbackSuccessFunction< TResponse > >;


/**
 * 回调结构 - 请求失败
 */
export type UCallbackFailure = iberbar.System.TCallbackOrFunction< UCallbackFailureFunction >;


/**
 * 请求抽象接口
 */
export class IRequest
{
    /**
     * 请求地址
     */
    url: string;

    /**
     * 请求方式，GET和POST
     */
    method?: "GET" | "POST";

    processData?: boolean;
    
    contentType?: string | false;

    /**
     * 额外数据，多用于post
     */
    data?: any;

    header: {} = {};

    /**
     * 设置异步，默认异步
     */
    async?: boolean;

    /**
     * 设置超时
     */
    timeout?: number;

    /**
     * 请求成功回调容器
     */
    protected m_successCallbacks: iberbar.System.TCallbackArray< UCallbackSuccessFunction > = new iberbar.System.TCallbackArray< UCallbackSuccessFunction >();

    /**
     * 请求失败回调容器
     */
    protected m_failureCallbacks: iberbar.System.TCallbackArray< UCallbackFailureFunction > = new iberbar.System.TCallbackArray< UCallbackFailureFunction >();;

    /**
     * 发送请求
     */
    public Send()
    {
        throw Error( "" );
    }

    public get SuccessCallbacks()
    {
        return this.m_successCallbacks;
    }

    public get FailureCallbacks()
    {
        return this.m_failureCallbacks;
    }

    // public SuccessCallbacks.Add( callback: Array< TCallback< UCallbackSuccessFunction > | UCallbackSuccessFunction > )
    // {
    //     if ( callback == null )
    //         return;

    //     this.success.Add( callback );
    // }

    // public FailureCallbacks.Add( callback: Array< TCallback< UCallbackFailureFunction > | UCallbackFailureFunction > )
    // {
    //     if ( callback == null )
    //         return;

    //     this.failure.Add( callback );
    // }

    public DoSuccess( response: any )
    {
        this.m_successCallbacks.Execute( response );
    }

    public DoFailure( errCode: number, errText: string )
    {
        this.m_failureCallbacks.Execute( errCode, errText );
    }
};


