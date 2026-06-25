import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Inicial({ navigation }) {
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Text>ID do Item:</Text>
      <Text>Nome:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
    titulo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
  },
});