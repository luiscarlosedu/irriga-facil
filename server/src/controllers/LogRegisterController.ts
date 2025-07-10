import { Request, Response } from "express";
import { LogRegisterService } from "../services/LogRegisterService";

export class LogRegisterController {
    async handle(req: Request, res: Response) {
        const logRegisterService = new LogRegisterService();
        const logRegisters = await logRegisterService.execute();
        res.json(logRegisters);
    }
}