import { Request, Response, Router } from "express";
import { LogRegisterController } from "./controllers/LogRegisterController";

const router = Router();

router.get("/logs", new LogRegisterController().handle);

export { router };