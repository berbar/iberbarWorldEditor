
import iberbar from "../libs/iberbar";


export class CIpcChannelAttribute extends iberbar.System.CAttribute
{
    public readonly Name: string = null;
    public readonly Persistent: boolean = true;

    public constructor( name: string, persistent: boolean )
    {
        super();
        this.Name = name;
        this.Persistent = persistent;
    }
};


export function IpcChannel( name: string, persistent?: boolean ): iberbar.System.UDecoratorFunctionType_ForClass
{
    return iberbar.System.Attribute( new CIpcChannelAttribute( name, persistent == null ? true : persistent ) );
}


export class CIpcChannelEventAttribute extends iberbar.System.CAttribute
{
    public readonly eventId: string = null;

    public constructor( eventId: string )
    {
        super();
        this.eventId = eventId;
    }
};


export function IpcChannelEvent( eventId: string ): iberbar.System.UDecoratorFunctionType_ForMethod
{
    return iberbar.System.Attribute( new CIpcChannelEventAttribute( eventId ) );
}