

const path = require( 'path' );
const fs = require( "fs" );
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const modBabelForOf = require("@babel/plugin-transform-for-of");
const modBabelObjectAssign = require("@babel/plugin-transform-object-assign");
const modBabelTypeofSymbol = require("@babel/plugin-transform-typeof-symbol");
//const buildConf = require( "./a1-webpack-conf.json" );

const workspace = path.resolve( __dirname, ".." );
const entry_dir = path.resolve( workspace, "Projects", "Src", "Client", "pages" );
const build_dir = path.resolve( workspace, "Projects", "WWWRoot" );
const alias_dir = path.resolve( workspace, "Projects", "Src", "Client"  );
const env = process.env.NODE_ENV;

//let css_ident_name = '[path][name]__[local]';
let css_ident_name = "[local]-[hash:base64:32]";
if ( env == "prodution" )
{
    //css_ident_name = '[hash:base64:32]';
    css_ident_name = "[local]-[hash:base64:32]";
}

var webpack_conf = {
    entry: {
    },
    output: {
        path: path.join( build_dir ),
        filename: 'js/[name]/index.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [ 
                    //MiniCssExtractPlugin.loader,
                    'style-loader', // adds styles to the DOM
                    'css-modules-ts-definitions-loader',
                    {
                      loader: 'css-loader', // converts CSS into CommonJS
                      options: {
                        modules: {
                            localIdentName: css_ident_name,
                            // mode: "local",
                            
                            exportLocalsConvention: "camelCase",
                            // exportOnlyLocals: false,
                            //localIdentContext: path.resolve(__dirname, "src"),
                        },
                        esModule: true,
                        //camelCase: true,
                        //minimize: false,
                        //localIdentName: "[local]-[hash:base64:32]"
                        // minimize: (mode == "production") ? true : false,
                        // localIdentName: (mode == "production") ? "[hash:base64:16]" : "[local]-[hash:base64:16]"
                      }
                    },
                    'sass-loader' // compiles Sass to CSS
                    // {
                    //     loader: "sass-loader",
                    //     options: {sass: require("dart-sass")}
                    //   }
                ]
            },
            // ??????js??????
            // ????????????typescript?????????
            {
                test: /\.ts$/,
                
                use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [ modBabelForOf, {loose: true}],
                            [ modBabelTypeofSymbol, {loose: true} ]
                        ]
                    },
                    
                },
                {
                    loader: "ts-loader"
                }]
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [ modBabelForOf, {loose: true}],
                            [ modBabelTypeofSymbol, {loose: true} ]
                        ]
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', "scss", '.css', '.ts'],
        // alias???tsconfig?????????baseurl??????
        alias: {
            "common": path.resolve( alias_dir, "common" ),
            // "generated": path.resolve( alias_dir, "generated" ),
            "views": path.resolve( alias_dir, "views" ),
            // //"widgets": path.resolve( alias_dir, "widgets" ),
            "styles": path.resolve( alias_dir, "styles" ),
            "libs": path.resolve( alias_dir, "libs" ),
            "communication": path.resolve( alias_dir, "communication" ),
            // "ajax": path.resolve( alias_dir, "ajax" ),
            // "@aspnet/signalr": "@aspnet/signalr/dist/esm/index.js",
            //""
        },
    },
    plugins: [
        new webpack.BannerPlugin( '???????????????????????????' ),
        new MiniCssExtractPlugin({
            filename: 'css/[name]/index.css' 
        }), //???????????????????????????style.css?????????
    ],
};



//console.log( buildConf.ignoreEntries );

var entry_array = [];
function findEntry( dirname, entry_name )
{
    const farray = fs.readdirSync( dirname, "utf8" );
    for ( const fnode of farray )
    {
        const fpath = path.join( dirname, fnode )
        const fstat = fs.statSync( fpath );
        if ( fstat.isDirectory() == true )
        {
            findEntry( fpath, path.join( entry_name, fnode ) );
        }
        else if ( fnode == "entry.ts" )
        {
            entry_array.push( entry_name );
            // if ( buildConf.ignoreEntries.indexOf( entry_name ) < 0 )
            // {
            //     entry_array.push( entry_name );
            // }
            // else
            // {
            //     console.log( "ignore entry: " + entry_name );
            // }
        }
    }
}
findEntry( entry_dir, "" );

console.log( "----------------------------" );


for ( const entry of entry_array )
{
    console.log( entry );
    webpack_conf.entry[ entry ] = path.join( entry_dir, entry, "entry.ts" );
}

// ??????ts???js?????????????????????????????????????????????ts??????

webpack_conf["devtool"] = 'source-map';
webpack_conf["devServer"] = {
    publicPath: path.resolve( workspace, "build" )
};

// webpack_conf["externals"] = {
//     "electron": 'require( "electron" )'
// }
webpack_conf["target"] = 'electron-renderer';

console.log( webpack_conf );
module.exports = webpack_conf;