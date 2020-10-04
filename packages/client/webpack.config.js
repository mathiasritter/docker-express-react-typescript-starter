const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientConfig = {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.json",
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        inline: true,
        disableHostCheck: true,
        compress: true,
        historyApiFallback: true,
        https: {
            key: path.resolve(__dirname, "../../lcldev/localhost.key"),
            cert: path.resolve(__dirname, "../../lcldev/localhost.crt"),
        },
        host: "0.0.0.0",
        port: 3001,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: { "^/api": "" },
            },
        },
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        publicPath: "/",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],
};

module.exports = [clientConfig];
