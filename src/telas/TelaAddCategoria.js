import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useCategorias } from "../contexts/CategoriasContext";

export default function TelaAddCategoria({ navigation }) {
  const { adicionarCategoria } = useCategorias();

  const handleAdicionar = () => {
    const novaCategoria = {
      id: String(Date.now()),
      titulo: "Needs",
      rotulo: "📚 Livros",
      tipoAlvo: "",
      alvo: 300,
      atribuido: 20,
      gasto: 10,
    };

    adicionarCategoria(novaCategoria);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      
      <Text style={styles.titulo}>Adicionar categoria</Text>
      <Button title="Salvar categoria" onPress={handleAdicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
});
