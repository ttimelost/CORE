import { criarDao } from "./criarDAO";

const categoriaDao = criarDao("categorias", [
  "grupo",
  "nome",
  "icone",
  "alvo",
  "tipoAlvo",
  "atribuido",
]);

export const { iniciarTabela, inserir, listarTodos, apagar, atualizar } =
  categoriaDao;