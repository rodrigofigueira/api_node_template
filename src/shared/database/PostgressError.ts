interface PostgresError {
    code: string;
    detail: string;
    hint: string;
}

export default PostgresError;