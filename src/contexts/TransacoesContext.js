import React, { createContext, useContext } from "react";
import * as TransacaoDAO from "../dao/transacoes";
import { useColecaoDAO } from "./useColecaoDAO";

const TransacoesContext = createContext();

export function TransacoesProvider({ children }) {
  const {
    itens: transacoes,
    adicionar: adicionarTransacao,
    editar: editarTransacao,
    remover: removerTransacao,
  } = useColecaoDAO(TransacaoDAO, "as transações");

  return (
    <TransacoesContext.Provider
      value={{
        transacoes,
        adicionarTransacao,
        editarTransacao,
        removerTransacao,
      }}
    >
      {children}
    </TransacoesContext.Provider>
  );
}

export function useTransacoes() {
  return useContext(TransacoesContext);
}
