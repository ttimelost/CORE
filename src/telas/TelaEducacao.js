import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaEducacao({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Tela educacao</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#1b1c21",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2d2f36",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  texto: {
    fontSize: 16,
    color: "#d0d4dd",
    marginBottom: 8,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    marginBottom: 16,
  },
});