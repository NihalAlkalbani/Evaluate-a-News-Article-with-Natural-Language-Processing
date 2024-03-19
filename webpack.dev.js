
const webpack = require("webpack"),
path = require("path"),
HtmlWebpackPlugin = require("html-webpack-plugin"),
{CleanWebpackPlugin} = require("clean-webpack-plugin"),
CssMininizerPlugin = require("css-minimizer-webpack-plugin"),
TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: 'source-map',
    output: {
        filename: 'boss.js',
        path: path.resolve(__dirname, "dist"),
        libraryTarget: 'var',
        library: 'Client',
        clean: true,
    },
    module: {
        rules: [
            {
                test: '/.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
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
    optimization: {
            minimizer: [
                new CssMininizerPlugin(),
                new TerserPlugin()
            ],
            minimize: true,
    },
};