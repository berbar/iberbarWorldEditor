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