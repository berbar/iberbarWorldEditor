
import { IpcChannel, IpcChannelEvent } from "../attributes";

@IpcChannel( "default" )
export class CDefaultIpcChannel
{
    @IpcChannelEvent( "save_type" )
    protected OnEventSaveType(): void
    {

    }

    @IpcChannelEvent( "read_type" )
    protected OnEventReadType(): void
    {

    }
}