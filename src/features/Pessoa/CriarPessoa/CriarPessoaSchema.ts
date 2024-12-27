import Joi from "../../../shared/config/messages_joi";

const criarPessoaSchema = Joi.object({    
    nome: Joi.string().min(5).max(200).required(),
    dtNascimento: Joi.date().required()
});

export default criarPessoaSchema;