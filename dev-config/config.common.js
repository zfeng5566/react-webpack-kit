const path = require('path');
const webpack = require("webpack");
// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 官网不推荐使用
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootPath = path.join(__dirname, "../");
/**
 * true 开发环境
 * false 线上环境
 */
const is_DEV = process.env.NODE_ENV === 'development';


const styleLoadersConfig = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: "static/css/"
        }
    },
    {
        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
    }
]

module.exports = {
    mode: is_DEV ? 'development' : 'production',
    entry: {
        app: path.join(rootPath, 'src/index.js'),
    },

    output: {
        filename: is_DEV ? '[name].[hash].js' : "[name].[contenthash:16].js",
    },
    resolve: {
        // 配置扩展名解析默认值
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true
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
            },
            {
                test: /\.css$/,
                use: styleLoadersConfig

            },
            {
                test: /\.scss$/,
                use: [
                    ...styleLoadersConfig,
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]

            },
            {
                test: /\.less$/,
                use: [
                    ...styleLoadersConfig,
                    {
                        loader: "less-loader" // 将 Sass 编译成 CSS
                    }
                ]

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },

        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxSize: 0,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 10,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // filename: "vendor.[contenthash:16].[ext]",
                    // name(module, chunks, cacheGroupKey) {
                    //     console.log(module, chunks, cacheGroupKey);
                    //     return "name112"
                    // },
                    name: "verdors",
                    priority: -10,
                    minChunks: 1,
                },
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)/,
                    name: "commons",
                    priority: 0,
                    minChunks: 1,
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        is_DEV ? new webpack.HotModuleReplacementPlugin() : undefined,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:16].css',
            // chunkFilename: '[id].[contenthash].css',
        }),

    ]
}