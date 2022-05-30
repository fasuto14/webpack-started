const HtmlWebPack = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: '/style.css$',
                use: ['style-loader', 'css-loader']
            },
            {
                test: '/style.css$',
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPack({
            title: 'My Webpack App',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' }
            ]
        })
    ],
}