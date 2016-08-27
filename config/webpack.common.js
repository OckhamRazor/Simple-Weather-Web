/**
 * Created by baobaobao on 2016/8/24.
 */

var webpack = require('webpack');
var helpers = require('./helpers');
//动态更新html
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: helpers.root('app','index.html'),
    filename: 'index.html',
    inject: 'body' //注入到body底部
});

//分离打包css
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './app/index.js'
    ],
    //默认拓展名匹配
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude:/node_modules/, loader:"babel-loader"},
            {test: /\.css$/, exclude:/node_modules/,loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.(png|jpg|svg)$/,loader: 'file-loader?limit=8192&name=assets/images/[name].[ext]'}
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig
    ]
};