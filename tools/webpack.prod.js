/**
 * @file webpack config js
 * @author leon <ludafa@outlook.com>
 */

const webpack = require('webpack');
const path = require('path');

const reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
};

const reactDomExternal = {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
};

const config = {
    entry: [
        path.join(__dirname, '../src/Lottery.js')
    ],
    externals: {
        'react': reactExternal,
        'react-dom': reactDomExternal,
        'redux': true,
        'react-redux': true,
        'mola': true
    },
    output: {
        library: 'mola-lottery',
        libraryTarget: 'umd',
        filename: 'lib/Lottery.js'
    },
    module: {
        preloaders: [
            {test: /\.js.map?$/, loader: 'source-map'}
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'babel'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.BannerPlugin('2016 Baidu Inc. All Rights Reserved'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
    // devtool: 'source-map'
};


module.exports = config;
