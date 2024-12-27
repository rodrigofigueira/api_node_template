import express, { Request, NextFunction } from "express";
import 'express-async-errors'
import { router } from "./routes";
import 'dotenv/config'; 

const app = express();
const port = process.env.PORT || "";

app.use(express.json());
app.use(router);

app.use((err: any, req: Request, res: any, next: NextFunction) => {

    if(err instanceof Error){
        //poderia criar uma interface/type por exemplo: ErrorReponse
        const erro400: object = { error: err.message };
        return res.status(400).json(erro400);
    }

    const error500: object = { 
        status: 'error',
        message: 'Internal server error'
    }

    return res.status(500).json(error500);
});

app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });