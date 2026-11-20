import { criarDao } from './criarDAO'

const atribuicaoDao = criarDao('atribuicoes', [
  "id_categoria",
  "mes",
  "quantia",
]);

export const { inciarTabela, inserir, listarTodos, apagar, atualizar } =
  atribuicaoDao;