import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useCategorias } from "../contexts/CategoriasContext";
import { useState } from "react";

export default function TelaEditarCategoria({ navigation, route }) {
  const { adicionarCategoria, editarCategoria, removerCategoria } = useCategorias();

  const categoria = route.params?.categoria;

  const editando = !!categoria;

  const [icone, setIcone] = useState(categoria?.icone ?? "");
  const [titulo, setTitulo] = useState(categoria?.titulo ?? "");
  const [rotulo, setRotulo] = useState(categoria?.rotulo ?? "");
  const [tipoAlvo, setTipoAlvo] = useState(
    categoria?.tipoAlvo == null ? "" : String(categoria.tipoAlvo)
  );
  const [alvo, setAlvo] = useState(
    categoria?.alvo == null ? "" : String(categoria.alvo)
  );

  const handleSalvar = async () => {
    const categoriaFormulario = {
      ...(categoria?.id == null ? {} : { id: categoria.id }),
      icone,
      titulo,
      rotulo,
      tipoAlvo: Number(tipoAlvo) || 0,
      alvo: Number(alvo) || 0,

      atribuido: categoria?.atribuido ?? 0,
      gasto: categoria?.gasto ?? 0,
    };

    try {
      if (editando) {
        await editarCategoria(categoriaFormulario);
      } else {
        await adicionarCategoria(categoriaFormulario);
      }
      navigation.goBack();
    } catch (erro) {
      console.error("Não foi possível salvar a categoria.", erro);
    }
  };

  async function handleRemover() {
    if (!categoria) return;

    try {
      await removerCategoria(categoria.id);
      navigation.goBack();
    } catch (erro) {
      console.error("Não foi possível remover a categoria.", erro);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={styles.titulo}>
          {editando ? "Editar categoria" : "Nova categoria"}
        </Text>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Ícone</Text>
      <TextInput
        style={styles.input}
        value={icone}
        onChangeText={setIcone}
      />

      <Text style={styles.label}>Categoria</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={rotulo}
        onChangeText={setRotulo}
      />

      <Text style={styles.label}>Tipo de alvo</Text>
      <TextInput
        style={styles.input}
        value={tipoAlvo}
        onChangeText={setTipoAlvo}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Alvo</Text>
      <TextInput
        style={styles.input}
        value={alvo}
        onChangeText={setAlvo}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}> 
        <Text style={styles.textoBotao}>{editando ? "Salvar alterações" : "Criar categoria"}</Text>
      </TouchableOpacity>

      {editando && (
        <TouchableOpacity
          style={styles.botaoRemover}
          onPress={handleRemover}
        >
          <Text style={styles.textoBotao}>
            Remover categoria
          </Text>
        </TouchableOpacity>
      )}
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
    marginBottom: 48,
    marginTop: 48,
  },

  botaoVoltar: {
    backgroundColor: "#28292e",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
  },

  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
    marginTop: 12,
  },

  input: {
    backgroundColor: "#28292e",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10
  },

  botaoRemover: {
    backgroundColor: "red",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },

  botaoSalvar: {
    backgroundColor: "green",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});