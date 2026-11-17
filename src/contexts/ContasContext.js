import React, { createContext, useContext } from "react";
import * as ContaDAO from "../dao/conta";
import { useTransacoes } from "./TransacoesContext";
import { somarTransacoesDoMes } from "../utils/mesmoMes";
import { useColecaoDAO } from "./useColecaoDAO";

const ContasContext = createContext();

export function ContasProvider({ children }) {
  const {
    itens: contas,
    adicionar: adicionarConta,
    editar: editarConta,
    remover: removerConta,
  } = useColecaoDAO(ContaDAO, "as contas");
  const { transacoes } = useTransacoes();

  const hoje = new Date();

  const contasComQuantia = contas.map((conta) => {
    const quantia = somarTransacoesDoMes(
      transacoes,
      "id_conta",
      conta.id,
      hoje
    );

    return {
      ...conta,
      quantia,
    };
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