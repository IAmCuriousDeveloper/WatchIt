const path = require('path');

module.exports = {
    context : __dirname,
    entry : "./js/ClientApp.jsx",
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
    module:{
        rules:[
            {
                test: /\.jsx?$/,//file must have an extension of js or jsx where x is optional
                loader:'babel-loader'
            }
        ]
    }
}