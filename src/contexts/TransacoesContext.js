import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TransacoesContext = createContext();
const TRANSACOES_STORAGE_KEY = "transacoes";

const transacoesIniciais = [
  {
    id: "1",
    valor: "67.12",
    beneficiario: "loja de pão",
    id_categoria: "1",
    data: "2026-09-27",
    memo: "Comprei pão né porra",
  },
];

export function TransacoesProvider({ children }) {
  const [transacoes, setTransacoes] = useState(transacoesIniciais);
  const carregamentoConcluido = useRef(false);

  useEffect(() => {
    async function carregarTransacoes() {
      try {
        const transacoesSalvas = await AsyncStorage.getItem(
          TRANSACOES_STORAGE_KEY,
        );

        if (transacoesSalvas) {
          setTransacoes(JSON.parse(transacoesSalvas));
        }
      } catch (erro) {
        console.error("Deu bosta na hora de carregar trnsações: ", erro);
      } finally {
        carregamentoConcluido.current = true;
      }
    }

    carregarTransacoes();
  }, []); //@V: pra que caralhos que serve essa lista vazia

  useEffect(() => {
    if (!carregamentoConcluido.current) return; //@v por que tem asyn loading e os caraio se a gente ta esperando carregar os caraio?

    AsyncStorage.setItem(
      TRANSACOES_STORAGE_KEY,
      JSON.stringify(transacoes),
    ).catch((erro) => {
      console.error("Deu rim em salvar categoira ", erro);
    });
  }, [transacoes]);

  /* function editarTransacoes(escolhaTransacao) {
    setTransacoes((transacoesAtuais) => [

    ]) @V: TODO: fazer isso né
  } */

  return (
    <TransacoesContext.Provider
      value={{
        transacoes,
        //editar
      }}
    >
      {children}
    </TransacoesContext.Provider>
  );
}

export function useTransacoes() {
  return useContext(TransacoesContext);
}
