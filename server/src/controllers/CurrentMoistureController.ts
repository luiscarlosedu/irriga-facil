import { Request, Response } from "express";
import { CurrentMoistureService } from "../services/CurrentMoistureService";

export class CurrentMoistureController {
    async handle(req: Request, res: Response) {
        const currentMoistureService = new CurrentMoistureService();
        const moisture = await currentMoistureService.execute();
        res.json(moisture);
    }
}