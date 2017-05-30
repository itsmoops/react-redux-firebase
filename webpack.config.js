const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({'React': 'react', 'ReactDOM': 'react-dom'}),
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!less-loader"})
            }, {
                test: /.jpe?g$|.gif$|.png$|.svg$|.woff2?$|.ttf$|.eot$|.wav$|.mp3$/,
                loader: require.resolve("file-loader") + "?name=[path][name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
}
