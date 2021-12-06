
import * as modPath from "path";
import * as modFs from "fs";

import * as modDataTypeDefs from "../common/data_type_definitions";
import * as modEnv from "../env";


export type USaveOptions =
{
    format: "json"
};


export function Save( definition: any, workspace: string, name: string, type: modDataTypeDefs.UDataDefinitionType, options?: USaveOptions )
{
    let typeName = modEnv.NamesForDataTypeDefs[ type ];
    let filepath = modPath.resolve( workspace, "Type", typeName, name + ".json" )
    let definitionJsonText = JSON.stringify( definition );
    modFs.open( filepath, "w", function()
    {

    } );
}