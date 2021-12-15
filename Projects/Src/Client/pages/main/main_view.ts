
import { CMainContentAbstract } from "views/application_template1/v_main_content";
import style from "./main_view.scss";

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