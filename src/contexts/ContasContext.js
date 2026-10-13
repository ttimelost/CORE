import React, { createContext, useContext, useEffect, useState } from "react";
import * as ContaDAO from "../dao/contaDAO";
import { useTransacoes } from "./TransacoesContext";
import { mesmoMes } from "../utils/mesmoMes";

const ContasContext = createContext();

const contasIniciais = [
  {
    id: 1,
    nome: "bradesco",
    tipo: 0,
  },
]

export function ContasProvider({ children }) {
  const [contas, setContas] = useState([]);
  const { transacoes } = useTransacoes();

  useEffect(() => {
    async function carregar() {
      try {
        await ContaDAO.iniciarTabela();
        let contasSalvas = await ContaDAO.listarTodos();

        if (contasSalvas.length === 0) {
          for (const conta of contasIniciais) {
            await ContaDAO.inserir(conta);
          }
          contasSalvas = await ContaDAO.listarTodos();
        }

        setContas(contasSalvas);
      } catch (erro) {
        console.error("Não foi possível carregar as contas do SQLite.", erro);
      }
    }
    carregar();
  }, [])

  async function adicionarConta(conta) {
    await ContaDAO.inserir(conta);
    setContas(await ContaDAO.listarTodos());
  }

  async function editarConta(conta) {
    await ContaDAO.atualizar(conta);
    setContas(await ContaDAO.listarTodos());
  }

  async function removerConta(id) {
    await ContaDAO.apagar(id);
    setContas(await ContaDAO.listarTodos());
  }

  const hoje = new Date();

  const contasComQuantia = contas.map((conta) => {
    const quantia = transacoes
      .filter((transacao) => {
        const mesmaConta = String(transacao.id_conta) === String(conta.id);

        return mesmaConta && mesmoMes(transacao.data, hoje);
      })
      .reduce((total, transacao) => total + Number(transacao.valor || 0), 0);

    return { ...conta, quantia };
  });

  return (
    <ContasContext.Provider
      value={{
        contas: contasComQuantia,
        adicionarConta,
        editarConta,
        removerConta,
      }}
    >
      {children}
    </ContasContext.Provider>
  );
}

export function useContas() {
  return useContext(ContasContext);
}