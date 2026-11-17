import { memo, useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { useTransacoes } from "../contexts/TransacoesContext";
import { useCategorias } from "../contexts/CategoriasContext";
import { useContas } from "../contexts/ContasContext";

export default function TelaEditarTransacao({ navigation, route }) {
  const { adicionarTransacao, editarTransacao, removerTransacao } = useTransacoes();

  const { categorias } = useCategorias();
  const { contas } = useContas();
  const transacao = route.params?.transacao;

  const editando = !!transacao; // se não tiver vazio

  const [valor, setValor] = useState(String(transacao?.valor ?? ""));

  const [memo, setMemo] = useState(transacao?.memo ?? "");
  const [beneficiario, setBeneficiario] = useState(
    transacao?.beneficiario ?? "",
  );
  const [id_categoria, setId_categoria] = useState(
    transacao?.id_categoria ?? "",
  );
  const [id_conta, setId_conta] = useState(transacao?.id_conta ?? "");
  const [data, setData] = useState(transacao?.data ?? "");
  const [erro, setErro] = useState("");

  function validar() {
    if (!id_categoria || !id_conta) {
      return "Selecione uma categoria e uma conta.";
    }

    return "";
  }

  const handleSalvar = async () => {
    const mensagemErro = validar();
    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

    const transacaoFormulario = {
      id: transacao?.id ?? String(Date.now()),
      valor,
      memo,
      beneficiario,
      id_categoria,
      id_conta,
      data,
    };

    try {
      if (editando) {
        await editarTransacao(transacaoFormulario);
      } else {
        await adicionarTransacao(transacaoFormulario);
      }
      navigation.goBack();
    } catch (error) {
      console.error("Não foi possível salvar a transação.", error);
      Alert.alert("Erro ao salvar", "Não foi possível salvar a transação.");
    }
  };

  async function handleRemover() {
    if (!transacao) return;

    try {
      await removerTransacao(transacao.id);
      navigation.goBack();
    } catch (error) {
      console.error("Não foi possível remover a transação.", error);
      Alert.alert("Erro ao remover", "Não foi possível remover a transação.");
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.titulo}>
          {editando ? "Editar Transação" : "Nova transação"}
        </Text>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Valor"
      />
      <TextInput
        style={styles.input}
        value={beneficiario}
        onChangeText={setBeneficiario}
        placeholder="Beneficiário"
      />
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="Dia"
      />
      <TextInput
        style={styles.input}
        value={memo}
        onChangeText={setMemo}
        placeholder="MEMO"
      />

      <TouchableOpacity style={styles.input} onPress={handleSalvar}>
        <Text style={styles.textoBotao}>{editando ? "Salvar alterações" : "Criar transacao"}</Text>
      </TouchableOpacity>
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <TouchableOpacity style={styles.input} onPress={handleRemover}>
        <Text style={styles.textoBotao}>Apabar</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Categoria</Text>

      {categorias.map((categoria) => (
        <TouchableOpacity
          key={categoria.id}
          onPress={() => {
            setId_categoria(categoria.id);
            setErro("");
          }}
          style={{
            padding: 12,
            marginBottom: 6,
            borderRadius: 8,
            backgroundColor:
              String(id_categoria) === String(categoria.id)
                ? "#356859"
                : "#28292e",
          }}
        >
          <Text style={{ color: "#fff" }}>
            {categoria.icone} {categoria.nome}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.label}>Conta</Text>
      {contas.map((conta) => (
        <TouchableOpacity
          key={conta.id}
          onPress={() => {
            setId_conta(conta.id);
            setErro("");
          }}
          style={{
            padding: 12,
            marginBottom: 6,
            borderRadius: 8,
            backgroundColor:
              String(id_conta) === String(conta.id) ? "#356859" : "#28292e",
          }}
        >
          <Text style={{ color: "#fff" }}>{conta.nome}</Text>
        </TouchableOpacity>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    padding: 20,
  },
  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 48,
    marginBottom: 32,
  },
  botaoVoltar: {
    backgroundColor: "#28292e",
    padding: 10,
    borderRadius: 8,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginTop: 12,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
  },
  erro: {
    color: "#ff6b6b",
    marginTop: 8,
  }
});
