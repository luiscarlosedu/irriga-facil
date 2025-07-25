import express, { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof Error) {
        return void res.status(400).json({
            error: err.message
        });
    };

    return void res.status(500).json({
        status: "error",
        message: "Internal server error",
    });

});

app.listen(3333, () => {
    console.log("HTTPS Running!");
})