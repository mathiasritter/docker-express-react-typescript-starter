import express, { Request, Response } from "express";
import { name } from "@thisproject/core";

const router = express.Router();

router.get("", (req: Request, res: Response) => {
    res.json({
        test: `hello ${name}`,
    });
});

export { router as exampleRouter };
