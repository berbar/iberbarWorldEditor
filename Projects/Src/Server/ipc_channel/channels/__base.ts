import * as Electron from "electron";
import { UIpcRequest } from "../../common/ipc_request";
import iberbar, { TypeOf } from "../../libs/iberbar";
import { CIpcChannelAttribute } from "../attributes";





export class CBaseIpcChannel
{

    protected m_channel: string = null;

    public constructor()
    {
        let t = this.GetType();
        let channelNameAttr = t.GetCustomAttributeOne( TypeOf( CIpcChannelAttribute ), false );
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