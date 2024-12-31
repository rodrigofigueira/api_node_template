import { v4 as uuidv4 } from 'uuid';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { TYPES } from './types';
import { IPessoaRepository } from './CriarPessoaRepository';
import { ICriarPessoaRequest, ICriarPessoaResponse } from './CriarPessoaModels';

@injectable()
export class PessoaService {
    constructor(
        @inject(TYPES.PessoaRepository) private pessoaRepository: IPessoaRepository
    ) {}

    async criarPessoa(pessoa: ICriarPessoaRequest): Promise<ICriarPessoaResponse> {
        const id = uuidv4();
        return await this.pessoaRepository.criarPessoa(id, pessoa.nome, pessoa.dtNascimento);
    }
}
