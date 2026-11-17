import React, { createContext, useContext } from "react";
import * as CategoriaDAO from "../dao/categoria";
import { useTransacoes } from "./TransacoesContext";
import { somarGastosDoMes } from "../utils/mesmoMes";
import { useColecaoDAO } from "./useColecaoDAO";

const CategoriasContext = createContext();

export function CategoriasProvider({ children }) {
  const {
    itens: categorias,
    adicionar: adicionarCategoria,
    editar: editarCategoria,
    remover: removerCategoria,
  } = useColecaoDAO(CategoriaDAO, "as categorias");
  const { transacoes } = useTransacoes();

  const hoje = new Date();


  const categoriasComGasto = categorias.map((categoria) => {
    const gasto = somarGastosDoMes(
      transacoes,
      "id_categoria",
      categoria.id,
      hoje
    );

    return {
      ...categoria,
      gasto,
    };
  });


  return (
    <CategoriasContext.Provider
      value={{
        categorias: categoriasComGasto,
        adicionarCategoria,
        editarCategoria,
        removerCategoria,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
}

export function useCategorias() {
  return useContext(CategoriasContext);
}