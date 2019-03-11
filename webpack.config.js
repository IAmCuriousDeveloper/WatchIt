const path = require('path');
const webpack = require('webpack');

module.exports = {
    context : __dirname,
    entry : [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./js/ClientApp.jsx"],
    devtool:"cheap-eval-source-map", //its very useful coz whenever we make a mistake it will show us our actual code instead of webpack's bundle code
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx','.json']
    },
    stats:{
        colors:true,
        reasons:true,
        chunks:true
    },
    devServer:{
        hot:true,
        publicPath:'/public',
        historyApiFallback:true
        //what does it mean? if you (server) doesnot know about anything just pass it down to client routing
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
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