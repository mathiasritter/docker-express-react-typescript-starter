import express from "express";
import { exampleRouter } from "./controller/example";

const router = express.Router();

router.use("/example", exampleRouter);

export { router as apiRouter };
