import { PessoaService } from "./CriarPessoaService";
import { ICriarPessoaRequest, ICriarPessoaResponse } from './CriarPessoaModels'
import { IPessoaRepository } from "./CriarPessoaRepository";

describe('criarPessoa', () => {

    let mockRepository: jest.Mocked<IPessoaRepository>;
    let pessoaService: PessoaService;

    beforeEach(() => {
        mockRepository = {
            criarPessoa: jest.fn(),
        } as jest.Mocked<IPessoaRepository>;
        pessoaService = new PessoaService(mockRepository);
    });

    it('deve criar pessoa corretamente', async () => {

        // Arrange
        const input: ICriarPessoaRequest = { nome: 'João', dtNascimento: new Date('1990-01-01') };
        const expectedOutput: ICriarPessoaResponse = {
            id: 'mock-id',
            nome: 'João',
            dtNascimento: new Date('1990-01-01'),
            ativo: true,
        };

        mockRepository.criarPessoa.mockResolvedValue(expectedOutput);

        // Act
        const result = await pessoaService.criarPessoa(input);

        // Assert
        expect(result).toEqual(expectedOutput);
        expect(mockRepository.criarPessoa).toHaveBeenCalledWith(expect.any(String), input.nome, input.dtNascimento);

    });

});