
import { CApplication, CMainContentAbstract, CreateViewOnBody } from "views/application_template1";
import { CFileTabView } from "views/tabview";
//import * as style from "./filetab.scss";
import { CMainView } from "./main_view";

import "styles/global.scss";


class CMainApplication extends CApplication
{
    protected OnConfigureIoc(cb: iberbar.Autofac.CContainerBuilder): void
    {
        super.OnConfigureIoc( cb );
    }

    protected OnConfigureMVC( mvc: iberbar.MVC.CBuilder ): void
    {
        super.OnConfigureMVC( mvc );
        mvc.RegisterView( TypeOf( CMainView ) ).As( TypeOf( CMainContentAbstract ) ).SingleInstance();
        //mvc.RegisterView( TypeOf( CFileTabView ) );
    }

    protected OnLoaded(): void
    {
        super.OnLoaded();
    }
}

new CMainApplication().Load();
