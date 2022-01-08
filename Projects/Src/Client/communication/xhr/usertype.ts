
import { UUsertype } from "common/data_type_definitions";
import { ActionName, ApiController, Area, CController, HostName, HttpPost, UCallbackFailure, UCallbackSuccess } from "libs/communication/ajax";
import { IController_Usertype } from "../base/usertype";



@HostName( "" )
@Area( "[controller]/[action]" )
@ApiController("Usertype")
export class CController_Usertype extends CController implements IController_Usertype
{
    @HttpPost()
    @ActionName("GetUsertypes")
    public GetUsertypes(success: UCallbackSuccess<UUsertype[]>, failure: UCallbackFailure): void
    {
    }
};
