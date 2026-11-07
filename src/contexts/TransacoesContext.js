import React, { createContext, useContext, useEffect, useState } from "react";
import * as TransacaoDAO from "../dao/transacao";
const TransacoesContext = createContext();

const transacoesIniciais = [
  {
    id: "1",
    valor: "67.12",
    beneficiario: "loja de pão",
    id_categoria: "1",
    id_conta: "1",
    data: "2026-11-02",
    memo: "Comprei pão",
  },
];

export function TransacoesProvider({ children }) {
  const [transacoes, setTransacoes] = useState([]);
  useEffect(() => {
    async function carregar() {
      try {
        await TransacaoDAO.iniciarTabela();
        let transacoesSalvas = await TransacaoDAO.listarTodos();

        if (transacoesSalvas.length === 0) {
          for (const transacao of transacoesIniciais) {
            await TransacaoDAO.inserir(transacao);
          }
          transacoesSalvas = await TransacaoDAO.listarTodos();
        }

        setTransacoes(transacoesSalvas);
      } catch (erro) {
        console.error("Não foi possível carregar as transacoes do SQLite.", erro);
      }
    }
    carregar();
  }, [])

  async function adicionarTransacao(transacao) {
    await TransacaoDAO.inserir(transacao);
    setTransacoes(await TransacaoDAO.listarTodos());
  }

  async function editarTransacao(transacao) {
    await TransacaoDAO.atualizar(transacao);
    setTransacoes(await TransacaoDAO.listarTodos());
  }

  async function removerTransacao(id) {
    await TransacaoDAO.apagar(id);
    setTransacoes(await TransacaoDAO.listarTodos());
  }

  return (
    <TransacoesContext.Provider
      value={{
        transacoes: transacoes,
        adicionarTransacao,
        editarTransacao,
        removerTransacao
      }}
    >
      {children}
    </TransacoesContext.Provider>
  );

}

export function useTransacoes() {
  return useContext(TransacoesContext);
}
