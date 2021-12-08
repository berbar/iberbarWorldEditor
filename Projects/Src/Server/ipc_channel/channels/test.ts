
import { IpcChannel, IpcChannelEvent } from "../attributes";

@IpcChannel( "test" )
export class CTestIpcChannel
{
    @IpcChannelEvent( "hello" )
    protected OnEventSaveType(): void
    {

    }
}