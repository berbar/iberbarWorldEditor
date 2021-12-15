
import { CApplication as CApplicationBase } from "views/application";
import { CMainView } from "./v_main";
import { gBodyContentElement, CreateViewOnBody } from "views/application_mvc2";
// import { CHeaderView } from "./v_header";
// import { CUserNavView } from "./v_user_nav";
// import { CLeftMenusView } from "./v_leftmenu";
// // import * as modXhrAccount from "ajax/account";
// import { CWaitingView } from "views/waiting";

export class CApplication extends CApplicationBase
{
    protected OnConfigureIoc( cb: iberbar.Autofac.CContainerBuilder ): void
    {
        super.OnConfigureIoc( cb );

        //this.RegisterXhrControllerType( cb, TypeOf( modXhrAccount.Controllers.CUserController ) );
    }

    protected OnConfigureMVC( mvc: iberbar.MVC.CBuilder ): void
    {
        super.OnConfigureMVC( mvc );

        mvc.RegisterView( TypeOf( CMainView ) )
            .AsSelf()
            .SingleInstance()
            .OnActivating( e => e.Instance.Create( gBodyContentElement, iberbar.MVC.KernelJquery.UViewCreateStyle.Append ) );

        // mvc.RegisterView( TypeOf( CHeaderView ) ).AsSelf().SingleInstance();

        // mvc.RegisterView( TypeOf( CUserNavView ) ).AsSelf().SingleInstance();

        // mvc.RegisterView( TypeOf( CLeftMenusView ) ).AsSelf().SingleInstance();

        //mvc.RegisterView( TypeOf( CWaitingView ) ).AsSelf().SingleInstance().OnActivating( e => CreateViewOnBody( e.Instance ) );
    }

    protected OnLoaded(): void
    {
        super.OnLoaded();
        $("html").css( "height", "100%" );
        $("body").css( "height", "100%" );
        gBodyContentElement.css( "height", "100%" );
        this.m_lifetimeScope.Resolve( TypeOf( CMainView ) );
    }
};

