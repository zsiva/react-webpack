var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/app',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "css-loader" }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
