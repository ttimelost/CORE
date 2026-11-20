import React, { createContext, useContext } from "react";
import * as AtribuicaoDAO from '../dao/atribuicao'
import { useColecaoDAO } from './useColecaoDAO'

const AtribuidosContext = createContext();

export function AtribuidosProvider({ children }) {
  const {
    itens: atribuicoes,
    adicionar,
    editar,
    remover,
  } = useColecaoDAO(AtribuicaoDAO, "as atribuições")

  async function atribuir(id_categoria, mes, valor) {
    const atribuicaoExistente = atribuicoes.find(
      (atribuicao) =>
        String(atribuicao.id_categoria) == String(id_categoria) &&
        String(atribuicao.mes) == String(mes)
    );

    if (atribuicaoExistente) {
      await editar({
        ...atribuicaoExistente,
        valor,
      });
      return;
    }

    await adicionar({ id_categoria, mes, valor })
  }

  return (
    <AtribuidosContext.Provider
      value={{atribuicoes, atribuir, removerAtribuicao: remover}}
      >
      {children}
    </AtribuidosContext.Provider>
  );
}

export function useAtribuidos() {
  const contexto = useContext(AtribuidosContext);

  if (!contexto) {
    throw new Error("useAtribuidos deve ser usado dentro de AtribuidosProvider.");
  }

  return contexto;
}