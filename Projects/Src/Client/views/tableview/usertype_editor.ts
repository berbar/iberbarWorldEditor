
import * as modUserTypeDefinitions from "common/data_type_definitions";
import style from "./usertype_editor.scss";



export enum URowEditType
{
    Text = 0,
};


export type URowOptions<T=any> =
{
    key: string;
    name: string;
    comment: string;
    editType: URowEditType;
    exts: T;
};


export type URowOptionsExt_Text =
{
    text: string;
};



abstract class CRowAccessor
{
    public ReturnRowHTML( rowOptions: URowOptions ): string
    {
        let strEditGrid = this.ReturnEditGridHTML( rowOptions );
        
        return /*html*/`
            <div class="${style.row}" id="${rowOptions.key}">
                <div class="${style.fieldKeyAndName}">
                    <p id="${style.pname}">${rowOptions.name}</p>
                    <p id="${style.pkey}">(${rowOptions.key})</p>
                </div>
                <div class="${style.fieldComment}">${rowOptions.comment}</div>
                <div class="${style.fieldEdit}">${strEditGrid}</div>
            </div>
        `;
    }

    protected abstract ReturnEditGridHTML( rowOptions: URowOptions ): string
};


class CRowAccessorForText extends CRowAccessor
{
    protected ReturnEditGridHTML( rowOptions: URowOptions<URowOptionsExt_Text> ): string
    {
        return /*html*/`
            <input type="text" value="${rowOptions.exts.text==null?"":rowOptions.exts.text}" />
        `;
    }
};


const g_RowAccessors = {
    [URowEditType.Text]: new CRowAccessorForText()
};



export class CView extends iberbar.MVC.CView
{
    @iberbar.MVC.KernelJquery.FromElement( `.${style.rowsLayout}` )
    protected m_element_RowsLayout: JQuery = null;

    public ReturnClasses(): string[] {
        return [ style.usertypeEditor ];
    }

    public ReturnHTML(): string
    {
        return /*html*/`
            <div class="${style.rowsLayout}"></div>
        `;
    }

    public SetRowOptionsList( rowOptionsList: URowOptions[] ): void
    {
        let rowsHtml = "";
        for ( let i = 0, s = rowOptionsList.length; i < s; i ++ )
        {
            let rowOptions = rowOptionsList[ i ];
            let rowAccessor = g_RowAccessors[ rowOptions.editType ];
            rowsHtml += rowAccessor.ReturnRowHTML( rowOptions );
        }
        this.m_element_RowsLayout.append( rowsHtml );
    }

    protected ReturnRowHTML( rowOptions: URowOptions ): string
    {
        let rowAccessor = g_RowAccessors[ rowOptions.editType ];
        return rowAccessor.ReturnRowHTML( rowOptions );
    }
};