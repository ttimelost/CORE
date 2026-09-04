import React, { createContext, useContext, useState } from "react";

const CategoriasContext = createContext();

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

  // aparentemente assim é  mais seguro
  function adicionarCategoria(novaCategoria) {
    setCategorias((categoriasAtuais) => [
      ...categoriasAtuais,
      novaCategoria,
    ]);
  }

  function removerCategoria(id_removido) {
    setCategorias((categoriasAtuais) =>
      categoriasAtuais.filter((catergoia) => categoria.id !== id_removido)
    );
  }

  return (
    <CategoriasContext.Provider value={{
      categorias,
      adicionarCategoria,
      removerCategoria
    }}>
      {children}
    </CategoriasContext.Provider>
  );
}

export function useCategorias() {
  return useContext(CategoriasContext);
}
