import express from "express";
import { logger } from "./logging";
import { apiRouter } from "./routes";

const port = 3001;
const app = express();

app.use(apiRouter);

app.listen(port, async () => {
    logger.info(`Server listening on port ${port}...`);
});
