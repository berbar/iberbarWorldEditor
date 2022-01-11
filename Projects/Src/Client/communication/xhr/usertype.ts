
import { UUsertype } from "common/data_type_definitions";
import { ActionName, ApiController, Area, CController, HostName, HttpGet, HttpPost, UCallbackFailure, UCallbackSuccess } from "libs/communication/ajax";
import { IController_Usertype } from "../base/usertype";



@HostName( "https://localhost:7066" )
@Area( "[controller]/[action]" )
@ApiController("weatherforecast")
export class CController_Usertype extends CController implements IController_Usertype
{
    @HttpGet()
    @ActionName("Get")
    public GetUsertypes(success: UCallbackSuccess<UUsertype[]>, failure: UCallbackFailure): void
    {
    }
};
