import Joi, { Root } from 'joi';

const customJoi: Root = Joi.defaults((schema) => {
    return schema.options({
        messages: {
            'string.base': 'O campo {#label} deve ser uma string.',
            'string.empty': 'O campo {#label} não pode estar vazio.',
            'string.min': 'O campo {#label} deve ter no mínimo {#limit} caracteres.',
            'string.max': 'O campo {#label} deve ter no máximo {#limit} caracteres.',
            'number.base': 'O campo {#label} deve ser um número.',
            'number.min': 'O campo {#label} deve ser no mínimo {#limit}.',
            'number.max': 'O campo {#label} deve ser no máximo {#limit}.',
            'any.required': 'O campo {#label} é obrigatório.',
            'date.base': 'O campo {#label} deve ser uma data válida.',
        }
    });
});

export default customJoi;
