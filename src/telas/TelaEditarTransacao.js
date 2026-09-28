import { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { useTransacoes } from "../contexts/TransacoesContext";
import { useCategorias } from "../contexts/CategoriasContext";

export default function TelaEditarTransacao({ navigation, route }) {
  const { adicionarTransacao, editarTransacao, removerTransacao } =
    useTransacoes(); // depois bora condensar isso tudo pra editar categoria, né?

  const { categorias } = useCategorias();
  const transacao = route.params?.transacao;

  const editando = !!transacao; // se não tiver vazio

  const [valor, setValor] = useState(transacao?.valor ?? "");
  const [beneficiario, setBeneficiario] = useState(
    transacao?.beneficiario ?? "",
  );
  const [id_categoria, setId_categoria] = useState(
    transacao?.id_categoria ?? "",
  );
  const [data, setData] = useState(transacao?.data ?? "");

  const handleSalvar = () => {
    const transacaoFormulario = {
      id: transacao?.id ?? String(Date.now()),
      valor,
      beneficiario,
      id_categoria,
      data,
    };

    if (editando) {
      editarTransacao(transacaoFormulario);
    } else {
      adicionarTransacao(transacaoFormulario);
    }
    navigation.goBack();
  };

  function handleRemover() {
    if (!transacao) return;

    removerTransacao(transacao.id);
    navigation.goBack();
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

      <Text style={styles.label}>Categoria</Text>

      {categorias.map((categoria) => (
        <TouchableOpacity
          key={categoria.id}
          onPress={() => setId_categoria(categoria.id)}
          style={{
            padding: 12,
            marginBottom: 6,
            borderRadius: 8,
            backgroundColor:
              id_categoria === categoria.id ? "#356859" : "#28292e",
          }}
        >
          <Text style={{ color: "#fff" }}>
            {categoria.icone} {categoria.rotulo}
          </Text>
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
});
