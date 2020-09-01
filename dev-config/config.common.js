const path = require('path');
const rootPath = path.join(__dirname, "../");
/**
 * true 开发环境
 * false 线上环境
 */
const is_DEV = process.env.NODE_ENV === 'development';

// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: is_DEV ? 'development' : 'production',
    entry: {
        app: path.join(rootPath, 'src/index.js'),
    },
    output: {
        filename: "[name].[contenthash:16].js"
    },
    resolve: {
        // 配置扩展名解析默认值
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['eslint-loader'],
                exclude: [/node_modules/],
                enforce: 'pre'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        moduleIds: "named",
        chunkIds: "named",
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 10,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: "vendor.[contenthash:16].js",
                    priority: -10
                },
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)/,
                    filename: "commons.[contenthash:16].js",
                    priority: 0
                },
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()

    ]
}