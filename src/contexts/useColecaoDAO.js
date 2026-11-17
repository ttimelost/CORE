import { useEffect, useState } from "react";

export function useColecaoDAO(dao, nome_no_erro) {
  const [itens, setItens] = useState([]);

  async function atualizarLista() {
    setItens(await dao.listarTodos());
  }

  useEffect(() => {
    async function carregar() {
      try {
        await dao.iniciarTabela();
        let registrosSalvos = await dao.listarTodos();

        setItens(registrosSalvos);
      } catch (error) {
        console.error(`Não foi possível carregar ${nome_no_erro} do SQLite.`, error);
      }
    }

    carregar();
  }, [dao, nome_no_erro]);

  async function adicionar(registro) {
    await dao.inserir(registro);
    await atualizarLista();
  }

  async function editar(registro) {
    await dao.atualizar(registro);
    await atualizarLista();
  }

  async function remover(id) {
    await dao.apagar(id);
    await atualizarLista();
  }

  return { itens, adicionar, editar, remover };
}
