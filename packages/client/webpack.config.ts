import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";
import { Configuration } from "webpack";

const clientConfig: Configuration = {
    mode: (process.env.NODE_ENV || "development") as Configuration["mode"],
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: [/node_modules/, /\.spec\.tsx?$/],
                options: {
                    configFile: "tsconfig.json",
                },
            },
        ],
    },
    devServer: {
        hot: true,
        disableHostCheck: true,
        historyApiFallback: true,
        https: {
            key: path.resolve(__dirname, "../../lcldev/localhost.key"),
            cert: path.resolve(__dirname, "../../lcldev/localhost.crt"),
        },
        host: "0.0.0.0",
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                pathRewrite: { "^/api": "" },
            },
        },
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        chunkFilename: "[name].bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "public/index.html",
            filename: "index.html",
        }),
    ],
};

export default clientConfig;
