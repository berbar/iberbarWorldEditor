

import { IpcChannel, IpcChannelEvent, UIpcEventContext } from "../attributes";
import { CBaseIpcChannel } from "./__base";

@IpcChannel( "default" )
export class CDefaultIpcChannel extends CBaseIpcChannel
{

    @IpcChannelEvent( "GetUsertypes" )
    protected __GetUsertypes( context: UIpcEventContext ): void
    {
        console.log( context.request );
        this.SendResponseSuccess( context.ipcEvent, context.request, "ssss" );
    }
}