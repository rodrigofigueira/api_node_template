import Joi from 'joi';

const criarPessoaSchema = Joi.object({    
    nome: Joi.string().min(5).max(200),
    dtNascimento: Joi.date()
});

export default criarPessoaSchema;