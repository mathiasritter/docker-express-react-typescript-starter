const path = require("path");
const nodeExternals = require("webpack-node-externals");

const serverConfig = {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/server.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.json"
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "dist")
    },
    externals: [
        nodeExternals({
            whitelist: ["@thisproject/core"]
        })
    ],
    target: "node",
    node: {
        __dirname: false
    }
};

module.exports = [serverConfig];
