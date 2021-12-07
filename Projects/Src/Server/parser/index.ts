
import * as modPath from "path";
import * as modFs from "fs";

import * as modDataTypeDefs from "../common/data_type_definitions";
import * as modEnv from "../env";


export type USaveOptions =
{
    format: "json"
};


export function SaveType( definition: any, workspace: string, type: modDataTypeDefs.UDataDefinitionType, name: string, options?: USaveOptions ): void
{
    let typeName = modEnv.NamesForDataTypeDefs[ type ];
    let filepath = modPath.resolve( workspace, "Type", typeName, name + ".json" )
    let definitionJsonText = JSON.stringify( definition, null, 4 );
    modFs.writeFileSync( filepath, definitionJsonText, { encoding: "utf-8" } );
}

export function ReadTypeList( workspace: string, type: modDataTypeDefs.UDataDefinitionType ): string[]
{
    let typeName = modEnv.NamesForDataTypeDefs[ type ];
    let dir = modPath.resolve( workspace, "Type", typeName )
    let list = modFs.readdirSync( dir );
    let listCount = list.length;
    let listFinal: string[] = []
    for ( let i = 0; i < listCount; i ++ )
    {
        let extname = modPath.extname( list[i] );
        if ( extname == ".json" )
        {
            listFinal.push( list[i] );
        }
    }
    return listFinal;
}


export function ReadType( workspace: string, type: modDataTypeDefs.UDataDefinitionType, name: string ): string
{
    let typeName = modEnv.NamesForDataTypeDefs[ type ];
    let filepath = modPath.resolve( workspace, "Type", typeName, name + ".json" )
    let text = modFs.readFileSync( filepath, { encoding: "utf-8" } );
    return text;
}