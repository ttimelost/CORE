import React, { createContext, useContext } from "react";
import * as CategoriaDAO from "../dao/categoria";
import { useTransacoes } from "./TransacoesContext";
import {
  mesAtual,
  somarAtribuicoesAteMes,
  somarGastosAteMes,
  somarGastosDoMes,
  somarSaldoContas,
} from "../utils/mesmoMes";
import { useColecaoDAO } from "./useColecaoDAO";
import { useAtribuidos } from "./AtribuidosContext";

const CategoriasContext = createContext();

export function CategoriasProvider({ children }) {
  const {
    itens: categorias,
    adicionar: adicionarCategoria,
    editar: editarCategoria,
    remover: removerCategoria,
  } = useColecaoDAO(CategoriaDAO, "as categorias");
  const { transacoes } = useTransacoes();
  const { atribuicoes } = useAtribuidos();

  const hoje = new Date();
  const mes = new mesAtual(hoje);


  const categoriasComGasto = categorias.map((categoria) => {
    const gasto = somarGastosDoMes(
      transacoes,
      "id_categoria",
      categoria.id,
      hoje
    );

    const atribuido = somarAtribuicoesAteMes(
      atribuicoes,
      categoria.id,
      mes
    );

    const gastosAcumulados = somarGastosAteMes(
      transacoes,
      categoria.id,
      mes
    )

    return {
      ...categoria,
      gasto,
      atribuido,
      disponivel: atribuido - gastosAcumulados,
    };
  });

  const saldoContas = somarSaldoContas(transacoes);
  const totalAtribuido = atribuicoes
    .filter((atribuido) => String(atribuido.mes) <= mes)
    .reduce((total, atribuicao) => total + Number(atribuicao.valor || 0), 0)

  const aAtribuir = saldoContas - totalAtribuido;

  return (
    <CategoriasContext.Provider
      value={{
        categorias: categoriasComGasto,
        aAtribuir,
        mesAtual: mes,
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