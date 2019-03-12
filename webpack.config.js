const path = require('path');
const webpack = require('webpack');

module.exports = {
    context : __dirname,
    entry : [//order matter here
        'react-hot-loader/patch',//HMR
        'webpack-dev-server/client?http://localhost:8080',//HMR
        'webpack/hot/only-dev-server',//HMR
        './js/ClientApp.jsx'],
    devtool:"cheap-eval-source-map", //its very useful coz whenever we make a mistake it will show us our actual code instead of webpack's bundle code
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js',
        publicPath:'/public/'//HMR
    },
    resolve:{
        extensions:['.js','.jsx','.json']
    },
    stats:{
        colors:true,
        reasons:true,
        chunks:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), //additional abilities to do hot reloading 
        new webpack.NamedModulesPlugin() // if something goes wrong it will gives you detail about what goes wrong where
    ],
    devServer:{
        hot:true, //server should be hot //HMR
        publicPath:'/public',
        historyApiFallback:true
        //what does it mean? if you (server) doesnot know about anything just pass it down to client routing
    },
   
    module:{
        rules:[
            //if you are using eslint we should use below code before babel-loader
            // {
            //     enforce:'pre',
            //     test: /\.jsx?$/,//file must have an extension of js or jsx where x is optional
            //     loader:'eslint-loader',
            //     exclude:/node_modules/
            // },
            {
                test: /\.jsx?$/,//file must have an extension of js or jsx where x is optional
                loader:'babel-loader'
            }
        ]
    }
}