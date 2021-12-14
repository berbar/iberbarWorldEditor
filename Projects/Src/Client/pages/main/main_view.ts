
import style from "./main_view.scss";

export class CMainView extends iberbar.MVC.CView
{
    public ReturnClasses(): string[]
    {
        return [ style.main ];
    }

    public ReturnHTML(): string
    {
        return /*html*/`
        <div class="${style.leftLayout}"></div>
        <div class="${style.rightLayout}"></div>
        `;
    }
};