

import * as modXhrUsertype from "./xhr/usertype";
import * as modIpcUsertype from "./ipc/usertype";
import { IController_Usertype } from "./base/usertype";
import { CController as CXhrController } from "libs/communication/ajax";
import { CController as CIpcController } from "libs/communication/ipc";



function GetPaths( mode?: "local" | "remote" ): any[]
{
    let paths: any[] = [];
    if ( mode == null || mode == "local" )
    {
        paths = paths.concat([
            modIpcUsertype
        ]);
    }
    if ( mode == null || mode == "remote" )
    {
        paths = paths.concat([
            modXhrUsertype
        ]);
    }
    return paths;
}


function GetAssemblies( mode?: "local" | "remote" ): iberbar.System.Reflection.CAssembly[]
{
    let paths = GetPaths( mode );
    let assemblies: iberbar.System.Reflection.CAssembly[] = [];
    for ( const p of paths )
    {
        assemblies.push( new iberbar.System.Reflection.CAssembly( p ) );
    }
    return assemblies;
}


function RegisterControllerTypes( cb: iberbar.Autofac.CContainerBuilder, assemblies: iberbar.System.Reflection.CAssembly[] ): void
{
    let baseTypeXhr = TypeOf( CXhrController );
    let baseTypeIpc = TypeOf( CIpcController );
    for ( let assembly of assemblies )
    {
        let controllerTypes = assembly.GetTypes().where( ( exportType )=>
        {
            if ( exportType.IsInheritFrom( baseTypeXhr ) == true || exportType.IsInheritFrom( baseTypeIpc ) )
                return true;
            return false;
        });
        for ( let ct of controllerTypes )
        {
            cb.RegisterType( ct ).AsSelf().InstancePerDependency().PropertiesAutowired();
        }
    }
}


export class CControllerManager
{
    protected m_ioc: iberbar.Autofac.IContainer;

    public constructor(
        @iberbar.Autofac.InjectLifetimeScope()
        ioc: iberbar.Autofac.IContainer )
    {
        this.m_ioc = ioc;
    }

    protected m_usertype: iberbar.System.Reflection.CType<IController_Usertype>;
    public get Usertype(): IController_Usertype
    {
        if ( this.m_usertype == null )
            return null;
        return this.m_ioc.Resolve( this.m_usertype );
    }

    public SwitchMode( mode: "local" | "remote" ): void
    {
        let assemblies = GetAssemblies( mode );
        let typeInfo = this.GetType();
        let baseTypeXhr = TypeOf( CXhrController );
        let baseTypeIpc = TypeOf( CIpcController );
        for ( let assembly of assemblies )
        {
            let controllerTypes = assembly.GetTypes().where( ( exportType )=>
            {
                if ( exportType.IsInheritFrom( baseTypeXhr ) == true || exportType.IsInheritFrom( baseTypeIpc ) )
                    return true;
                return false;
            });
            for ( let ct of controllerTypes )
            {
                let constructor = ct.GetConstructor();
                let propertyInfo = typeInfo.GetProperty( (<any>constructor.JsConstructor).$ControllerName );
                if ( propertyInfo != null && propertyInfo.CanWrite == true )
                {
                    propertyInfo.SetValue( this, ct );
                }
            }
        }
        
    }

}

/**
 * 
 * @param cb 
 * @param mode local本地模式，remote远程模式
 */
export function RegisterAll( cb: iberbar.Autofac.CContainerBuilder ): void
{
    let assemblies = GetAssemblies();
    RegisterControllerTypes( cb, assemblies );
    cb.RegisterType( TypeOf( CControllerManager ) ).SingleInstance();
}


