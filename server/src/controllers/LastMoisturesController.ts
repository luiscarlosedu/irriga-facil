import { Request, Response } from "express";
import { CurrentMoistureService } from "../services/CurrentMoistureService";
import { LastMoisturesService } from "../services/LastMoisturesService";

export class LastMoisturesController {
    async handle(req: Request, res: Response) {
        const lastMoisturesService = new LastMoisturesService();
        const moistures = await lastMoisturesService.execute();
        res.json(moistures);
    }
}