import { UCallbackFailureFunction, UCallbackSuccessFunction } from "./base";


// export interface IRequest
// {

// }


/**
 * 请求抽象接口
 */
export abstract class IRequest
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
    public abstract Send(): void;

    //public abstract SendAsync(): Promise<void>;

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


