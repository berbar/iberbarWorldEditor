import * as Electron from "electron";
import { UIpcRequest } from "../../common/ipc_request";
import iberbar from "../../libs/iberbar";


export class CBaseChannel
{

    protected m_channel: string = null;

    public constructor(
        @iberbar.Autofac.WithName( "channel" )
        channel: string )
    {
        this.m_channel = channel;
    }

    protected SendResponseSuccess( ipcEvent: Electron.IpcMainEvent, request: UIpcRequest, data?: any, exts?: any ): void
    {
        if ( this.m_channel == null )
            return;
        ipcEvent.sender.send( this.m_channel, request, {
            code: 0,
            data: data,
            exts: exts
        });
    }

    protected SendResponseFailure( ipcEvent: Electron.IpcMainEvent, request: UIpcRequest, erro: any, exts?: any ): void
    {
        if ( this.m_channel == null )
            return;
        ipcEvent.sender.send( this.m_channel, request, {
            code: -1,
            erro: erro,
            exts: exts
        });
    }
};