
import style from "./v_main.scss";
import { CMainContentAbstract } from "./v_main_content";
// import { CHeaderView } from "./v_header";
// import { CLeftMenusView } from "./v_leftmenu";


// @iberbar.MVC.KernelJquery.DependOnView( TypeOf( CHeaderView ), `.${style.header} .${style.content}` )
// @iberbar.MVC.KernelJquery.DependOnView( TypeOf( CLeftMenusView ), `.${style.main} .${style.nav}` )
@iberbar.MVC.KernelJquery.DependOnView( TypeOf( CMainContentAbstract ), `.${style.contentLayout}` )
export class CMainView extends iberbar.MVC.CView
{


    public ReturnHTML(): string
    {
        let str = "";
        str += `<div class="${style.headerLayout}"><div class="${style.content}"></div></div>`;
        str += `<div class="${style.contentLayout}"></div>`;
        return str;
    }

    public ReturnClasses(): Array< string >
    {
        return [ style.main ];
    }

    protected OnCreated(): void
    {

    }
};
