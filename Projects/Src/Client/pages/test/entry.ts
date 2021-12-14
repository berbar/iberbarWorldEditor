
import { ipcRenderer } from "electron";
import  style from "./eee.scss";

console.debug( "test entry" )
console.debug( style.aaaa );
console.debug( style.eee );

ipcRenderer.on( "hello", function( evt, ...args )
{
    console.debug( args[0] );
});
ipcRenderer.send("hello", "mary" );