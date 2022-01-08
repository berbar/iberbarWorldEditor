import { UUsertype } from "common/data_type_definitions";
import { IController_Usertype } from "communication/base/usertype";
import { CController, IpcSender, UCallbackFailure, UCallbackSuccess } from "libs/communication/ipc";


@iberbar.System.Reflection.TypeNickname( "CController_Usertype" )
export class CController_Usertype extends CController implements IController_Usertype
{
    @IpcSender()
    public GetUsertypes(success: UCallbackSuccess<UUsertype[]>, failure: UCallbackFailure): void
    {
    }
};