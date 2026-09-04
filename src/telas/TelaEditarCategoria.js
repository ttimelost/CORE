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

  const [icone, setIcone] = useState(categoria.icone);
  const [titulo, setTitulo] = useState(categoria.titulo);
  const [rotulo, setRotulo] = useState(categoria.rotulo);
  const [tipoAlvo, setTipoAlvo] = useState(categoria.tipoAlvo);
  const [alvo, setAlvo] = useState(
    categoria.alvo == null ? "" : String(categoria.alvo) /* se for nulo, deixa vazio, se não deixa em string  */
  );

  const handleSalvar = () => {
    const categoriaFormulario = {
      id: categoria.id ?? String(Date.now()), /* se for vazia usa o horário */
      icone,
      titulo,
      rotulo,
      tipoAlvo,
      alvo: Number(alvo) || 0,

      atribuido: categoria.atribuido ?? 0, 
      gasto: categoria.gasto ?? 0,
    }

    if (editando) {
      editarCategoria(categoriaFormulario);
    } else {
      adicionarCategoria(categoriaFormulario);
    }
    navigation.goBack();
  };

  function handleRemover() {
    if (!categoria) return;

    removerCategoria(categoria.id);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {editando ? "Editar categoria" : "Nova categoria"}
      </Text>

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
      />

      <Text style={styles.label}>Alvo</Text>
      <TextInput
        style={styles.input}
        value={alvo}
        onChangeText={setAlvo}
        keyboardType="numeric"
      />

      <Button
        title={editando ? "Salvar alterações" : "Criar categoria"} /* é tipo aquele bagulho de ta logado ou nao que o Salu falou */
        onPress={handleSalvar}
      />

      {editando && (
        <TouchableOpacity
          style={styles.botaoRemover}
          onPress={handleRemover}
        >
          <Text style={styles.textoRemover}>
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
    marginBottom: 30,
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
  },

  botaoRemover: {
    backgroundColor: "red",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },

  textoRemover: {
    color: "#fff",
    fontWeight: "bold",
  },
});