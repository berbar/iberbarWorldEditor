import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import iberbar from "./libs/iberbar";
import { n } from "./test";
import * as modParser from "./parser";
import { UDataDefinitionType } from './common/data_type_definitions';
import * as modIpcChannels from './ipc_channel';
import { CIpcChannelManager } from './ipc_channel/manager';
import { UIpcRequest } from './common/ipc_request';
console.log( iberbar.System );
console.log(n);

const workspace = "G:\\Test\\TestWorldEditor\\Test";

var ioc: iberbar.Autofac.IContainer = null;



function Main()
{
    let cb = new iberbar.Autofac.CContainerBuilder();
    
    modIpcChannels.Register( cb );

    ioc = cb.Build();

    CIpcChannelManager.sGetInstance().SetIoc( ioc );
    CIpcChannelManager.sGetInstance().LoadAllPersistent();
}

Main();



// ipcMain.on( "default", function( evt, request: UIpcRequest, url, ...args )
// {
//     console.log( request );
//     console.log( url );
//     console.log( args );
//     evt.sender.send( "default", request, {
//         code: 0,
//         data: "ssss"
//     } );

//     // //modParser.SaveType( {Name:"haha"}, workspace, UDataDefinitionType.Enum, "haha", { "format": "json" } );
//     // let enumFileText = modParser.ReadType( workspace, UDataDefinitionType.Enum, "haha" );
//     // console.log( enumFileText );
//     // let enums = modParser.ReadTypeList( workspace, UDataDefinitionType.Enum )
//     // console.log( enums );
// });
// ipcMain.on( "default", function( evt, action, ...args )
// {
//     console.log( action );
//     console.log( args );
//     // evt.sender.send( "hello", "lucy" );

//     // //modParser.SaveType( {Name:"haha"}, workspace, UDataDefinitionType.Enum, "haha", { "format": "json" } );
//     // let enumFileText = modParser.ReadType( workspace, UDataDefinitionType.Enum, "haha" );
//     // console.log( enumFileText );
//     // let enums = modParser.ReadTypeList( workspace, UDataDefinitionType.Enum )
//     // console.log( enums );
// });

let mainWindow: Electron.BrowserWindow;
/**
 *
 */
function createWindow(): void {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 600,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js'),
        // },
        width: 800,
        
        webPreferences: {
            // 下面两个字段解决require not defined
            nodeIntegration: true,
            contextIsolation: false
        },
        backgroundColor: "transparent"
    });
    mainWindow.maximize();
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, '../WWWRoot/index.html'));
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.