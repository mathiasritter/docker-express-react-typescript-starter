import pino, { PrettyOptions } from "pino";

const prettyPrintOptions: PrettyOptions = {
    colorize: true,
    translateTime: true,
    ignore: "pid,hostname",
};

const logger = pino({
    level: process.env.LOG_LEVEL || "info",
    prettyPrint: ["development", "test"].includes(process.env.NODE_ENV ?? "")
        ? prettyPrintOptions
        : false,
});

export { logger };
