import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ComponenteCategoria from "../componentes/ComponenteCategoria";

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.superCategoria}>
      <Text>Necessidades</Text>
        <View style={styles.cards}>
          <ComponenteCategoria
            rotulo="🛒Mercado"
            target="200.0"
            atribuido="100.0"
            gasto="12"
          />

          <ComponenteCategoria
            rotulo="⛽Gasolina"
            target="2000.0"
            atribuido="9.0"
            gasto="2000.0"
          />
        </View>
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
  cards: {
    width: "100%",
    maxWidth: 600,
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
  superCategoria: {

  }
});
