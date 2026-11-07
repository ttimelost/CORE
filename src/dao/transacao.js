import { criarDao } from "./criarDAO";

const transacaoDao = criarDao("transacoes", ["valor", "beneficiario", "id_categoria", "id_conta", "data", "memo"]);

export const { iniciarTabela, inserir, listarTodos, apagar, atualizar } =
  transacaoDao;