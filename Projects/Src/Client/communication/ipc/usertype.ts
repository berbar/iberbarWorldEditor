import { UUsertype } from "common/data_type_definitions";
import { IController_Usertype } from "communication/base/usertype";
import { ActionName, CController, ChannelName, IpcSender, Log, UCallbackFailure, UCallbackSuccess } from "libs/communication/ipc";


@iberbar.System.Reflection.TypeNickname( "CController_Usertype" )
@ChannelName( "default" )
export class CController_Usertype extends CController implements IController_Usertype
{
    @IpcSender()
    @ActionName( "GetUsertypes" )
    @Log()
    public GetUsertypes(success: UCallbackSuccess<UUsertype[]>, failure: UCallbackFailure): void
    {
        this.m_request.data = "sss"
    }
};