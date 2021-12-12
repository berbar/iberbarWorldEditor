
import { CApplication } from "views/application_mvc2";
import { CTabView } from "views/tabview";


class CMainApplication extends CApplication
{
    protected OnConfigureMVC( mvc: iberbar.MVC.CBuilder ): void
    {
        mvc.RegisterView( TypeOf( CTabView ) );
    }

    protected OnLoaded(): void
    {
    }

}

new CMainApplication().Load();
