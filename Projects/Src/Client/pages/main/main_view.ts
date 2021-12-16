
import { CMainContentAbstract } from "views/application_template1/v_main_content";
import * as modUserTypeEditor from "views/tableview/usertype_editor";
import style from "./main_view.scss";


@iberbar.MVC.KernelJquery.DependOnView( TypeOf( modUserTypeEditor.CView ), `.${style.contentLayout}` )
export class CMainView extends CMainContentAbstract
{
    public ReturnClasses(): string[]
    {
        return [ style.main ];
    }

    public ReturnHTML(): string
    {
        return /*html*/`
        <div class="${style.menusLayout}"></div>
        <div class="${style.resourcesLayout}"></div>
        <div class="${style.contentLayout}"></div>
        `;
    }
};