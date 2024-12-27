import { v4 as uuidv4 } from 'uuid';
import { connection } from '../../../shared/database/connection';
import PostgresError from '../../../shared/database/PostgressError';

interface CriarPessoaRequest{
    nome: string;
    dtNascimento: Date;
}

interface CriarPessoaResponse {
    id: string;
    nome: string;
    dtNascimento: Date;
    ativo: boolean;
}

export async function criarPessoa(pessoa: CriarPessoaRequest): Promise<CriarPessoaResponse> {

  try{
    const client = await connection.getClient();
    const sql = 'INSERT INTO pessoa (id, nome, dtNascimento) VALUES ($1, $2, $3) RETURNING *';
    const values = [uuidv4(), pessoa.nome, pessoa.dtNascimento];
    const { rows } = await client.query<CriarPessoaResponse>(sql, values);    

    if (!rows[0].id) {
        throw new Error('Nenhuma linha foi inserida');
    }

    return rows[0] as CriarPessoaResponse;

  } catch(error){
    
    if (error instanceof Error && 'code' in error && 'detail' in error && 'hint' in error) { 
        const postgresError: PostgresError = error as PostgresError; 
        console.log('codigo', postgresError.code)
        console.log('detail', postgresError.detail)
        console.log('hint', postgresError.hint)
        throw Error(postgresError.detail);
    }

    console.log(error);
    throw error;
  } 

}