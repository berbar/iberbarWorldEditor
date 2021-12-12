

import { ipcMain, IpcMainEvent } from "electron";
import iberbar from "../libs/iberbar";
import { CIpcChannelEventAttribute, CIpcChannelAttribute } from "./attributes";


type UChannelNode =
{
    name: string;
    type: iberbar.System.Reflection.CType;
    instance: Object;
    persistent: boolean;
    events: { [ key: string ]: iberbar.System.Reflection.CMethodInfo };
    listening: boolean;
}


export class CIpcChannelManager
{
    protected m_ioc: iberbar.Autofac.IContainer = null;
    protected m_channels: { [ key: string ]: UChannelNode } = {};

    public SetIoc( ioc: iberbar.Autofac.IContainer ): void
    {
        this.m_ioc = ioc;
    }

    public Register( clsType: iberbar.System.Reflection.CType ): void
    {
        let attrChannel = clsType.GetCustomAttributeOne( iberbar.System.Reflection.TypeOf( CIpcChannelAttribute ), false );
        if ( attrChannel == null )
        {
            console.log("");
            return;
        }
        let channelNode = this.m_channels[attrChannel.Name];
        if ( channelNode != null )
        {
            console.log( "" );
            return;
        }
        let events = {};
        let methods = clsType.GetMethods();
        for ( let i = 0, s = methods.length; i < s; i ++ )
        {
            let methodTemp = methods[ i ];
            let attrEvent = methodTemp.GetCustomAttributeOne( iberbar.System.Reflection.TypeOf( CIpcChannelEventAttribute ) );
            if ( attrEvent == null )
                continue;
            events[ attrEvent.eventId ] = methodTemp;
        }
        channelNode = {
            name: attrChannel.Name,
            type: clsType,
            instance: null,
            persistent: attrChannel.Persistent,
            events: events,
            listening: false
        };
        this.m_channels[ attrChannel.Name ] = channelNode;
    }

    public LoadAllPersistent(): void
    {
        for ( const name in this.m_channels )
        {
            let channelNode = this.m_channels[ name ];
            if ( channelNode.persistent == false )
                continue;
            if ( channelNode.instance == null )
            {
                channelNode.instance = this.m_ioc.Resolve( channelNode.type );
            }
            this.ListenNode( channelNode );
        }
    }

    public LoadOne( name: string ): void
    {
        let channelNode = this.m_channels[ name ];
        if ( channelNode.instance == null )
        {
            channelNode.instance = this.m_ioc.Resolve( channelNode.type );
        }
        this.ListenNode( channelNode );
    }

    protected ListenNode( channelNode: UChannelNode ): void
    {
        if ( channelNode.listening == true )
            return;

        if ( channelNode.persistent == true )
        {
            ipcMain.on( channelNode.name, function( this: UChannelNode, event, ...args: any[] )
            {
                let handler = channelNode.events[ args[ 0 ] ];
                if ( handler != null )
                {
                    handler.Invoke( channelNode.instance, ...args );
                }
            } );
        }
        else
        {
            ipcMain.once( channelNode.name, function( this: UChannelNode, event, ...args: any[] )
            {
                channelNode.listening = false;
                let handler = channelNode.events[ args[ 0 ] ];
                if ( handler != null )
                {
                    handler.Invoke( channelNode.instance, ...args );
                }
            } );
        }
    }




    private static sm_instance: CIpcChannelManager = new CIpcChannelManager();
    public static sGetInstance() { return this.sm_instance; }
};