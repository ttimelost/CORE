import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import * as CategoriaDAO from '../dao/categoriaDAO'
import { useTransacoes } from './TransacoesContext'


const CategoriasContext = createContext();



const categoriasIniciais = [
  {
    id: 1,
    icone: "🛒",
    titulo: "Necessidades",
    rotulo: "Mercado",
    tipoAlvo: 0,
    alvo: 200,
    atribuido: 100,
  },
  {
    id: 2,
    icone: "⛽",
    titulo: "Necessidades",
    rotulo: "Gasolina",
    tipoAlvo: 0,
    alvo: 2000,
    atribuido: 9,
  },
  {
    id: 3,
    icone: "🍿",
    titulo: "Entretenimento",
    rotulo: "Netflix",
    tipoAlvo: 0,
    alvo: 500,
    atribuido: 250,
  },
  {
    id: 6,
    icone: "🍿",
    titulo: "Entretenimento",
    rotulo: "TV a cabo",
    tipoAlvo: 0,
    alvo: 200,
    atribuido: 200,
  },
  {
    id: 4,
    icone: "🛠",
    titulo: "Infraestrutura",
    rotulo: "Manutenção da casa",
    tipoAlvo: 0,
    alvo: 2000,
    atribuido: 666,
  },
  {
    id: 5,
    icone: "🚗",
    titulo: "Infraestrutura",
    rotulo: "Manutenção do carro",
    tipoAlvo: 0,
    alvo: 9000,
    atribuido: 450,
  }
];

export function CategoriasProvider({ children }) {
  const [categorias, setCategorias] = useState([]);
  const { transacoes } = useTransacoes();

  useEffect(() => {
    async function carregar() {
      try {
        await CategoriaDAO.iniciarTabela();
        const categoriasSalvas = await CategoriaDAO.listarTodos();
        setCategorias(categoriasSalvas);
      } catch (erro) {
        console.error("Não foi possível carregar as categorias do SQLite.", erro);
      }
    }

    carregar();
  }, [])

  async function adicionarCategoria(categoria) {
    await CategoriaDAO.inserir(categoria);
    setCategorias(await CategoriaDAO.listarTodos());
  }

  async function editarCategoria(categoria) {
    await CategoriaDAO.atualizar(categoria);
    setCategorias(await CategoriaDAO.listarTodos());
  }

  async function removerCategoria(id) {
    await CategoriaDAO.apagar(id);
    setCategorias(await CategoriaDAO.listarTodos());
  }

  const hoje = new Date();

  const categoriasComGasto = categorias.map((categoria) => {
    const gasto = transacoes
      .filter((transacao) => {
        const dataTransacao = new Date(transacao.data);

        const mesmoMes =
          dataTransacao.getMonth() === hoje.getMonth() &&
          dataTransacao.getFullYear() === hoje.getFullYear();

        const mesmaCategoria =
          String(transacao.id_categoria) === String(categoria.id);

        return mesmoMes && mesmaCategoria;
      })
      .reduce((total, transacao) => {
        return total + Number(transacao.valor);
      }, 0);

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