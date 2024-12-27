import { Request, Response } from 'express';
import { criarPessoa } from './CriarPessoaService';

export async function CriarPessoaController(req: Request, res: Response) {
  const { nome, dtNascimento } = req.body;
  const novaPessoa = await criarPessoa({ nome, dtNascimento });
  res.status(201).json(novaPessoa);
}