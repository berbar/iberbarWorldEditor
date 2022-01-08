
import { UCallbackSuccess, UCallbackFailure } from "libs/communication/base";
import * as modDataTypeDefinitions from "common/data_type_definitions";

export interface IController_Usertype
{
    GetUsertypes( success: UCallbackSuccess<Array<modDataTypeDefinitions.UUsertype>>, failure: UCallbackFailure ): void;
};
