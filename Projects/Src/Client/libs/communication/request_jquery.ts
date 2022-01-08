

import * as modRequestBase from "./request";


export class CRequest extends modRequestBase.IRequest
{
    public Send()
    {
        if ( this.url == undefined )
        {
            console.error( "undefined url" );
            return ;
        }

        if ( typeof( this.contentType ) == "string" )
        {
            if ( this.contentType.startsWith( "application/json" ) )
                this.data = JSON.stringify( this.data );
        }
        // else
        // {
        //     this.data = JSON.stringify( this.data );
        // }

        // 构造ajax设置结构体
        let settings_ajax: JQuery.AjaxSettings = {
            type: this.method,
            async: this.async,
            dataType: "json",
            contentType: this.contentType,
            processData: this.processData,
            data: this.data,
            cache: false,
            context: this,
            timeout: this.timeout,
        };

        // 设置失败回调函数
        settings_ajax.error = function( this: CRequest, jqXHR: JQuery.jqXHR, textStatus: JQuery.Ajax.ErrorTextStatus, errorThrown: string )
        {
            this.DoFailure( jqXHR.status, textStatus );
        };
        // 设置成功回调函数
        settings_ajax.success = function( this: CRequest, data: any, textStatus: JQuery.Ajax.SuccessTextStatus, jqXHR: JQuery.jqXHR )
        {
            this.DoSuccess( data );
        }
        // 执行ajax请求
        $.ajax( this.url, settings_ajax );
    }
}