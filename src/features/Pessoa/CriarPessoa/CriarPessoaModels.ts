export interface ICriarPessoaRequest {
    nome: string;
    dtNascimento: Date;
}

export interface ICriarPessoaResponse {
    id: string;
    nome: string;
    dtNascimento: Date;
    ativo: boolean;
}
