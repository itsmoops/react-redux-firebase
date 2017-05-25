var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [new webpack.ProvidePlugin({'React': 'react', 'ReactDOM': 'react-dom'})],
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
                include: /node_modules\/semantic-ui-css/, // run css loader just for Semantic UI
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /.jpe?g$|.gif$|.png$|.svg$|.woff2?$|.ttf$|.eot$|.wav$|.mp3$/,
                loader: require.resolve("file-loader") + "?name=[path][name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
    // devServer: {
    //     compress: true,
    //     hot: true,
    //     noInfo: true,
    //     historyApiFallback: true
    // },
    // plugins: [new webpack.HotModuleReplacementPlugin()]
}
