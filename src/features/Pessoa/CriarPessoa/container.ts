import { Container } from "inversify";
import { connection } from '../../../shared/database/connection';
import { TYPES } from "./types";
import { PessoaService } from './CriarPessoaService'
import { IPessoaRepository, PessoaRepository } from './CriarPessoaRepository'

const container = new Container();

container.bind<IPessoaRepository>(TYPES.PessoaRepository).toDynamicValue(() => new PessoaRepository(connection));
container.bind<PessoaService>(PessoaService).toSelf();

export { container };
