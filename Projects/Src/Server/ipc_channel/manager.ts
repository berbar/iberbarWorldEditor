

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
}


export class CIpcChannelManager
{
    protected m_ioc: iberbar.Autofac.IContainer = null;
    protected m_channels: { [ key: string ]: UChannelNode } = null;

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
        let methods = channelNode.type.GetMethods();
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
            events: events
        };
        this.m_channels[ attrChannel.Name ] = channelNode;


    }

    public LoadAllPersistent(): void
    {
        for ( const name in this.m_channels )
        {
            let channelNode = this.m_channels[ name ];
            if ( channelNode.instance != null )
                continue;
            if ( channelNode.persistent == false )
                continue;
            this.LoadForce( channelNode );
        }
    }

    public LoadOne( name: string ): void
    {
        let channelNode = this.m_channels[ name ];
        if ( channelNode.instance != null )
            return;
        this.LoadForce( channelNode );
    }

    protected LoadForce( channelNode: UChannelNode ): void
    {
        //channelNode.instance = channelNode.type.GetConstructor().Invoke();
        if ( channelNode.instance == null )
        {
            channelNode.instance = this.m_ioc.Resolve( channelNode.type );
        }
        
        if ( channelNode.persistent == true )
        {
            ipcMain.on( channelNode.name, this.OnCommonChannel.bind( this ) );
        }
        else
        {
            ipcMain.once( channelNode.name, this.OnCommonChannel.bind( this ) );
        }
    }

    protected OnCommonChannel( event: IpcMainEvent, ...args: any[] )
    {

    }
};