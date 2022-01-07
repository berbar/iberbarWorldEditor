
import * as modUserTypeDefinitions from "common/data_type_definitions";
import style from "./usertype_editor.scss";


export class CFieldBinding
{
    protected m_fieldInfo: modUserTypeDefinitions.UStructField = null;

    public SetField( fieldInfo: modUserTypeDefinitions.UStructField ): void
    {
        this.m_fieldInfo = fieldInfo;
    }

    public ReturnHTML(): string
    {
        let strOptions_UserType = "";
        for ( const k in modUserTypeDefinitions.UBaseDataType )
        {
            const v = modUserTypeDefinitions.UBaseDataType[k];
            if ( typeof( v ) != "number" )
                continue;
            if ( v == this.m_fieldInfo.Type )
            {

            }
            strOptions_UserType+= /*html*/`<option value="${v}">${k}</option>`;

        }

        return /*html*/`
            <div class="${style.row}" id="${this.m_fieldInfo.Key}">
                <div class="${style.key}">${this.m_fieldInfo.Key}</div>
                <div class="${style.name}">
                    <input type="text" value="${this.m_fieldInfo.Name}" />
                </div>
                <div class="${style.usertype}">
                    <select>${strOptions_UserType}</select>
                </div>
                <div class="${style.comment}">
                    <textarea rows="4">${this.m_fieldInfo.Comment}</textarea>
                </div>
                <div class="${style.exts}"></div>
            </div>
        `;
    }
};



export class CView extends iberbar.MVC.CView
{
    @iberbar.MVC.KernelJquery.FromElement( `.${style.rowsLayout}` )
    protected m_element_RowsLayout: JQuery = null;


    protected m_fieldBindings: CFieldBinding[] = null;


    public ReturnClasses(): string[] {
        return [ style.usertypeEditor ];
    }

    public ReturnHTML(): string
    {
        return /*html*/`
            <div class="${style.rowsLayout}"></div>
        `;
    }

    public SetStruct( structInfo: modUserTypeDefinitions.UStruct ): void
    {
        this.m_element_RowsLayout.empty();

        this.m_fieldBindings = [];

        let strHtmlForFields = "";
        for ( let i = 0, s = structInfo.Fields.length; i < s; i ++ )
        {
            let field = structInfo.Fields[ i ];
            let binding = new CFieldBinding();
            binding.SetField( field );
            strHtmlForFields += binding.ReturnHTML();
            this.m_fieldBindings.push( binding );
        }

        this.m_element_RowsLayout.append( strHtmlForFields );
    }
};