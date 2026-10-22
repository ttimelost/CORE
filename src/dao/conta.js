import { criarDao } from "./criarDAO";

const contaDao = criarDao("contas", ["nome", "tipo"]);

export const { iniciarTabela, inserir, listarTodos, apagar, atualizar } =
  contaDao;