const webpack = require("webpack"),
path = require("path"),
HtmlWebpackPlugin = require("html-webpack-plugin"),
{CleanWebpackPlugin} = require("clean-webpack-plugin"),
CssMininizerPlugin = require("css-minimizer-webpack-plugin"),
MiniCssExtractPlugin = require("mini-css-extract-plugin"),
TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    devtool: 'hidden-source-map',
    output: {
        filename: 'boss.[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        libraryTarget: 'var',
        library: 'Client',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: false,
            cleanStaleWebpackAssets: true,
            protecWebpackAssete: false,
        }),
        ],
    module: {
        rules: [
            {
                test: '/.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMininizerPlugin(),
            new TerserPlugin()
        ],
        minimize: true,
    },
};