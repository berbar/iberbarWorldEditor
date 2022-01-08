import { ResolveRequestContext } from "libs/communication/ajax";
import { IRequest } from "libs/communication/request";
import { CRequest } from "libs/communication/request_jquery";


function HowToResolveRequestContext(): IRequest
{
    return new CRequest();
}

@ResolveRequestContext( HowToResolveRequestContext )
export abstract class IController
{
};
