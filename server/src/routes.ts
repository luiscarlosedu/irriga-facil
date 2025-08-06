import { Request, Response, Router } from "express";
import { LogRegisterController } from "./controllers/LogRegisterController";
import { LastLogController } from "./controllers/LastLogController";
import { CurrentMoistureController } from "./controllers/CurrentMoistureController";
import { LastMoisturesController } from "./controllers/LastMoisturesController";

const router = Router();

router.get("/logs", new LogRegisterController().handle);
router.get("/logs/last", new LastLogController().handle);
router.get("/moisture", new CurrentMoistureController().handle);
router.get("/last/moistures", new LastMoisturesController().handle);

export { router };