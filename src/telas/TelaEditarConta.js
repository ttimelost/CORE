import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";

import { useContas } from "../contexts/ContasContext";

export default function TelaEditarConta({ navigation, route }) {
  const { adicionarConta, editarConta, removerConta } = useContas();

  const conta = route?.params?.conta;

  const editando = !!conta;

  const [nome, setNome] = useState(conta?.nome ?? "");
  const [tipo, setTipo] = useState(conta?.tipo ?? "");

  const handleSalvar = async () => {
    if (!nome.trim()) {
      Alert.alert("Nome obrigatório", "Informe o nome da conta.");
      return;
    }

    const contaFormulario = {
      id: conta?.id ?? String(Date.now()),
      nome: nome.trim(),
      tipo: tipo.trim(),
    };

    try {
      if (editando) {
        await editarConta(contaFormulario)
      } else {
        await adicionarConta(contaFormulario)
      }
      navigation.goBack();
    } catch (error) {
      console.error("Não foi possível salvar a conta.", error);
      Alert.alert("Erro ao salvar", "Não foi possível salvar a conta.");
    }
  };

  async function handleRemover() { // precisa ou refatorar isso ou colocar essa linha debaixo em outro lugar, porque o nome da funcao nao ta descritivo
    if (!conta) return;

    try {
      await removerConta(conta.id);
      navigation.goBack();
    } catch (error) {
      console.error("Não foi possível remover a conta.", error);
      Alert.alert("Erro ao remover", "Não foi possível remover a conta.");
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <View>
        <Text>
          {editando ? "Editar Conta" : "Nova conta"}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>

      <Text>Nome</Text>
      <TextInput
        style={styles.entrada}
        value={nome}
        onChangeText={setNome} />
      <Text>Tipo</Text>
      <TextInput
        style={styles.entrada}
        value={tipo}
        onChangeText={setTipo} />

      <TouchableOpacity onPress={handleSalvar}>
        <Text>{editando ? "Salvar alterações" : "Criar conta"}</Text>
      </TouchableOpacity>
      {editando ? (
        <TouchableOpacity style={styles.botaoRemover} onPress={handleRemover}>
          <Text style={styles.textoBotao}>Excluir conta</Text>
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
  },
  conteudo: {
    padding: 20,
  },
  botaoRemover: {
    backgroundColor: "#a33",
    borderRadius: 8,
    marginTop: 12,
    padding: 12,
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  entrada: {
    backgroundColor: "#fff",
    color: "#F0F"
  }
});