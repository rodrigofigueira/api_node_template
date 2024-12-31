import { Request, Response } from 'express';
import { container } from "./container";
import { PessoaService } from "./CriarPessoaService";

export async function CriarPessoaController(req: Request, res: Response) {
  const { nome, dtNascimento } = req.body;
  const pessoaService = container.get(PessoaService);
  const novaPessoa = await pessoaService.criarPessoa({ nome, dtNascimento });
  res.status(201).json(novaPessoa);
}