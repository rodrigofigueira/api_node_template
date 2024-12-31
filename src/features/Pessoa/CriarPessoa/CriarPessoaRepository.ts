import 'reflect-metadata';
import { injectable } from 'inversify';
import { ICriarPessoaResponse } from './CriarPessoaModels';

export interface IPessoaRepository {
    criarPessoa(id: string, nome: string, dtNascimento: Date): Promise<ICriarPessoaResponse>;
}

@injectable()
export class PessoaRepository implements IPessoaRepository {
    private readonly connection: any;

    constructor(connection: any) {
        this.connection = connection;
    }

    async criarPessoa(id: string, nome: string, dtNascimento: Date): Promise<ICriarPessoaResponse> {
        const sql = 'INSERT INTO pessoa (id, nome, dtNascimento) VALUES ($1, $2, $3) RETURNING *';
        const values = [id, nome, dtNascimento];
        const client = await this.connection.getClient();
        const { rows }: { rows: ICriarPessoaResponse[] } = await client.query(sql, values);

        if (!rows[0]?.id) {
            throw new Error('Nenhuma linha foi inserida');
        }

        return rows[0];
    }
}
