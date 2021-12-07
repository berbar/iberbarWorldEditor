
import { ipcRenderer } from "electron";
import eee from "./eee.scss";

console.debug( "test entry" )
console.debug( eee.aaaa );
console.debug( eee.eee );

ipcRenderer.on( "hello", function( evt, ...args )
{
    console.debug( args[0] );
});
ipcRenderer.send("hello", "mary" );