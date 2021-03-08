import path from "path";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const serverConfig: Configuration = {
    mode: (process.env.NODE_ENV || "development") as Configuration["mode"],
    entry: "./src/server.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: [/node_modules/, /\.spec\.ts$/],
                options: {
                    configFile: "tsconfig.json",
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "dist"),
    },
    externals: [
        nodeExternals({
            allowlist: ["@thisproject/core"],
        }),
    ],
    target: "node",
    node: {
        __dirname: false,
    },
};

export default serverConfig;
