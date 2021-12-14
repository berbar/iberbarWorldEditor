
import { CApplication, CreateViewOnBody } from "views/application_mvc2";
import { CFileTabView } from "views/tabview";
//import * as style from "./filetab.scss";
import { CMainView } from "./main_view";


class CMainApplication extends CApplication
{


    protected OnConfigureMVC( mvc: iberbar.MVC.CBuilder ): void
    {
        mvc.RegisterView( TypeOf( CMainView ) );
        mvc.RegisterView( TypeOf( CFileTabView ) );
    }

    protected OnLoaded(): void
    {
        
        let main_view = this.m_lifetimeScope.Resolve( TypeOf( CMainView ) );
        CreateViewOnBody( main_view );
        //console.debug( style.fileTab );
        //new CFileTabView();
    }

}

new CMainApplication().Load();
