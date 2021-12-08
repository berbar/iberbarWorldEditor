import { CIpcChannelManager } from "./manager";
import { CDefaultIpcChannel } from "./channels/default";
import iberbar from "../libs/iberbar";

export function Register( cb: iberbar.Autofac.CContainerBuilder )
{
    cb.RegisterType( iberbar.System.Reflection.TypeOf( CDefaultIpcChannel ) );
    CIpcChannelManager.sGetInstance().Register( iberbar.System.Reflection.TypeOf( CDefaultIpcChannel ) );
}