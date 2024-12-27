import { Router, Request, Response } from "express";

// middleware para tratar requisições com joi
import { validateBody } from './shared/middlewares/validateBody'

import { CriarPessoaController } from './features/Pessoa/CriarPessoa/CriarPessoaController'
import criarPessoaSchema from "./features/Pessoa/CriarPessoa/CriarPessoaSchema";

const router: Router = Router();

router.get('/health', (req: Request, res: Response) => { res.send('App is running...') });

// Rota Pessoa
router.post('/pessoa', validateBody(criarPessoaSchema), CriarPessoaController);

export { router };