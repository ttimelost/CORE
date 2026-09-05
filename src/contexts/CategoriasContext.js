import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CategoriasContext = createContext();
const CATEGORIAS_STORAGE_KEY = "categorias";

const categoriasIniciais = [
  {
    id: "1",
    icone: "🛒",
    titulo: "Needs",
    rotulo: "Mercado",
    tipoAlvo: "",
    alvo: 200,
    atribuido: 100,
    gasto: 12,
  },
  {
    id: "2",
    icone: "⛽",
    titulo: "Needs",
    rotulo: "Gasolina",
    tipoAlvo: "",
    alvo: 2000,
    atribuido: 9,
    gasto: 2000,
  },
  {
    id: "3",
    icone: "🐦🐦",
    titulo: "Suborno",
    rotulo: "Quem deixou o boleto para o pombo?",
    tipoAlvo: "",
    alvo: 500,
    atribuido: 250,
    gasto: 3,
  },
  {
    id: "4",
    icone: "🐀",
    titulo: "Infraestrutura",
    rotulo: "Aluguel do rato",
    tipoAlvo: "",
    alvo: 666,
    atribuido: 666,
    gasto: 13,
  },
  {
    id: "5",
    icone: "🕳️",
    titulo: "Infraestrutura",
    rotulo: "Manutenção do buraco",
    tipoAlvo: "",
    alvo: 900,
    atribuido: 450,
    gasto: 901,
  }
];

export function CategoriasProvider({ children }) {
  const [categorias, setCategorias] = useState(categoriasIniciais);
  const carregamentoConcluido = useRef(false);

  useEffect(() => {
    async function carregarCategorias() {
      try {
        const categoriasSalvas = await AsyncStorage.getItem(CATEGORIAS_STORAGE_KEY);

        if (categoriasSalvas) {
          setCategorias(JSON.parse(categoriasSalvas));
        }
      } catch (erro) {
        console.error("Não foi possível carregar as categorias salvas.", erro);
      } finally {
        carregamentoConcluido.current = true;
      }
    }

    carregarCategorias();
  }, []);

  useEffect(() => {
    if (!carregamentoConcluido.current) return;

    AsyncStorage.setItem(
      CATEGORIAS_STORAGE_KEY,
      JSON.stringify(categorias)
    ).catch((erro) => {
      console.error("Não foi possível salvar as categorias.", erro);
    });
  }, [categorias]);

  // aparentemente assim é  mais seguro
  function adicionarCategoria(novaCategoria) {
    setCategorias((categoriasAtuais) => [
      ...categoriasAtuais,
      novaCategoria,
    ]);
  }

  function editarCategoria(escolhaCategoria) {
    setCategorias((categoriasAtuais) =>
      categoriasAtuais.map((categoria) =>
        categoria.id === escolhaCategoria.id ? escolhaCategoria : categoria
      )
    );
  }

  function removerCategoria(idRemovido) {
    setCategorias((categoriasAtuais) =>
      categoriasAtuais.filter((categoria) => categoria.id !== idRemovido)
    );
  }

  return (
    <CategoriasContext.Provider value={{
      categorias,
      adicionarCategoria,
      editarCategoria,
      removerCategoria
    }}>
      {children}
    </CategoriasContext.Provider>
  );
}

export function useCategorias() {
  return useContext(CategoriasContext);
}
