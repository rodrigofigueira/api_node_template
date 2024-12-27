import { Router, Request, Response } from "express";
import CriarPessoaRoutes from './features/Pessoa/CriarPessoa/routes';

const router = Router();

// Rota de saúde da aplicação
router.get('/health', (req: Request, res: Response) => {
    res.send('App is running...');
});

// Registrar as rotas de cada feature
router.use(CriarPessoaRoutes);

export default router;
