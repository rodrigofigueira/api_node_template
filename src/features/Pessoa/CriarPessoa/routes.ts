import { Router } from "express";
import { validateBody } from '../../../shared/middlewares/validateBody';
import { CriarPessoaController } from './CriarPessoaController';
import criarPessoaSchema from './CriarPessoaSchema';

const router = Router();

router.post('/pessoa', validateBody(criarPessoaSchema), CriarPessoaController);

export default router;