
import { CBaseTabView } from "./base";
import style from "./filetab.scss";

export class CFileTabView extends CBaseTabView
{
    public ReturnClasses(): string[]
    {
        return [ style.eee ];
    }
};