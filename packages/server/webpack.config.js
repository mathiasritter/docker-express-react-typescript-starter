const path = require("path");

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
                    configFile: "tsconfig.build.json"
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
    target: "node",
    node: {
        __dirname: false
    }
};

module.exports = [serverConfig];
