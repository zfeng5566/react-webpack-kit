const path = require('path');
const rootPath = path.join(__dirname, "../");
const is_DEV = process.env.NODE_ENV === 'development';

// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.NODE_ENV);
module.exports = {
    mode: is_DEV ? 'development' : 'production',
    entry: path.join(rootPath, 'src/index.js'),
    output: {
        filename: "bundle.[contenthash:8].js"
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
    plugins: [
        new HtmlWebpackPlugin()

    ]
}