import { Request, Response } from "express";
import { LastLogService } from "../services/LastLogService";

export class LastLogController {
    async handle(req: Request, res: Response) {
        const lastLogService = new LastLogService();
        const log = await lastLogService.execute();
        res.json(log);
    };
};