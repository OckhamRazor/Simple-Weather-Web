/**
 * Created by baobaobao on 2016/8/25.
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    //devtool: 'eval-source-map',
    output: {
        path: helpers.root('server','public'),
        publicPath: '/',
        filename: '[name].[hash].js',
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
    ]
});
