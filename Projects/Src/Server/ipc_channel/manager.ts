

import iberbar from "../libs/iberbar";
import { CIpcChannelEventAttribute, CIpcChannelAttribute } from "./attributes";

export class CIpcChannelManager
{
    protected m_channelDefs: void = null;

    public Register( clsType: iberbar.System.Reflection.CType ): void
    {
        let attrChannel = clsType.GetCustomAttributeOne( iberbar.System.Reflection.TypeOf( CIpcChannelAttribute ), false );
        if ( attrChannel == null )
        {
            console.log("");
            return;
        }
        attrChannel.Name
    }

    public Load(): void
    {
        
    }
};