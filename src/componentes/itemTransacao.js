import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ItemTransacao({ transacao, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("EditarTransacao", { transacao })}
      >
        <View style={styles.cardContainer}>
          <Text>{transacao.valor}</Text>
          <Text>{transacao.id_categoria}</Text>
          <Text>{transacao.beneficiario}</Text>
          <Text>{transacao.memo}</Text>
          <Text>{transacao.data}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#28292e",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },

  cardBody: {
    fontSize: 14,
    color: "#fff",
    padding: 2,
  },

  botao_remover: {
    borderRadius: 10,
    backgroundColor: "red",
    padding: 5,
  },
});
