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