
import { ipcRenderer } from "electron";
import * as eee from "./eee.scss";

console.debug( "test entry" )
console.debug( eee.cssModules.aaaa );
console.debug( eee.cssModules.eee );

ipcRenderer.on( "hello", function( evt, ...args )
{
    console.debug( args[0] );
});
ipcRenderer.send("hello", "mary" );