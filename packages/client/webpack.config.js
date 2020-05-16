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
                    configFile: "tsconfig.build.json"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        inline: true,
        disableHostCheck: true,
        compress: true,
        https: {
            key: path.resolve(__dirname, "../../nginx/localhost.key"),
            cert: path.resolve(__dirname, "../../nginx/localhost.crt")
        },
        host: "0.0.0.0",
        port: 3001
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        publicPath: "/",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};

module.exports = [clientConfig];
