const UNIQUE_CONSTRAINT = '23505';
const FOREIGN_KEY_VIOLATION = '23503';
const NOT_NULL_VIOLATION = '23502';
const STRING_TOO_LONG = '22001';
const FUNCTION_NOT_FOUND = '42883';

interface PostgresError {
    code: string;
    detail: string;
    hint: string;
}

const translateError = (error: PostgresError) => {

    if(error.code === UNIQUE_CONSTRAINT){
        const valor = error.detail.split('=')[1].split(')')[0].replace("(","");
        throw Error(`${valor} já existe!`);
    }

    console.log('Sem tratamento', error);
    throw(error.detail);

}

export { PostgresError, translateError };
