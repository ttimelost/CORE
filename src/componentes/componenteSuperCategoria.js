import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ComponenteSuperCategoria({ rotulo, navigation }) {
  return (
    <View>
      <Text style={styles.titulo}>{rotulo}</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('AddCategoria')}
      >
        <Text style={styles.textoBotao}>Joao</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    padding: 15,
  },
  botao: {
    // escreve codisa aiqwu
  },
  textoBotao: {
    color: "white"
  }
});
