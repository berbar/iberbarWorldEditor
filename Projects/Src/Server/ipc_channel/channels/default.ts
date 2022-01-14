
import * as Electron from "electron";
import { UIpcRequest } from "../../common/ipc_request";
import { IpcChannel, IpcChannelEvent } from "../attributes";
import { CBaseChannel } from "./__base";

@IpcChannel( "default" )
export class CDefaultIpcChannel extends CBaseChannel
{

    @IpcChannelEvent( "GetUsertypes" )
    protected __GetUsertypes( ipcEvent: Electron.IpcMainEvent, request: UIpcRequest, url: string, ...args: any[] ): void
    {
        console.log( request );
        this.SendResponseSuccess( ipcEvent, request, "ssss" );
    }
}