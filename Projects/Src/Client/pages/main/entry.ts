
import { CApplication, CMainContentAbstract, CreateViewOnBody } from "views/application_template1";
import { CFileTabView } from "views/tabview";
import * as modUserTypeEditor from "views/tableview/usertype_editor";
//import * as style from "./filetab.scss";
import * as modDataTypeDefinitions from "common/data_type_definitions";
import * as modCommunications from "communication";
import { CMainView } from "./main_view";

import "styles/global.scss";


class CMainApplication extends CApplication
{
    protected OnConfigureIoc(cb: iberbar.Autofac.CContainerBuilder): void
    {
        super.OnConfigureIoc( cb );

        modCommunications.RegisterAll( cb, modCommunications.UMode.Local );
    }

    protected OnConfigureMVC( mvc: iberbar.MVC.CBuilder ): void
    {
        super.OnConfigureMVC( mvc );
        mvc.RegisterView( TypeOf( CMainView ) ).As( TypeOf( CMainContentAbstract ) ).SingleInstance();
        mvc.RegisterView( TypeOf( modUserTypeEditor.CView ) ).AsSelf().SingleInstance();
        //mvc.RegisterView( TypeOf( CFileTabView ) );
    }

    protected OnLoaded(): void
    {
        super.OnLoaded();

        let struct: modDataTypeDefinitions.UStruct = {
            Extends: null,
            Comment: "",
            Fields: [
                {
                    Key: "field_1",
                    Name: "字段1",
                    Comment: `
    asset js/main/index.js 110 KiB [emitted] (name: main) 1 related asset
    asset js/test/index.js 24.7 KiB [emitted] (name: test) 1 related asset
    cached modules 69.1 KiB (javascript) 937 bytes (runtime) [cached] 33 modules
                    `,
                    Type: modDataTypeDefinitions.UBaseDataType.String,
                }
            ]
        };
        let editor = this.m_lifetimeScope.Resolve( TypeOf( modUserTypeEditor.CView ) );
        editor.SetStruct(struct);

        let manager = this.m_lifetimeScope.Resolve( TypeOf( modCommunications.CControllerManager ) );
        manager.Usertype.GetUsertypes(null, null);
    }
}

new CMainApplication().Load();
