const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new UglifyJSPlugin()
])

module.exports = webpackConfig
