import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ComponenteCategoria from "../componentes/componenteCategoria";
import ComponenteSuperCategoria from "../componentes/componenteSuperCategoria";
import { ScrollView } from "react-native-web";

const data_categoria = [
  { rotulo: "🛒Mercado", target: "200.0", atribuido: "100.0", gasto: "12" },
  { rotulo: "⛽Gasolina", target: "2000.0", atribuido: "9.0", gasto: "2000.0" },
  { rotulo: "Explorações intergaláticas", target: "2000000.0", atribuido: "9.0", gasto: "2000.0" },
  { rotulo: "⛽Gasolina de niovo", target: "2000.0", atribuido: "9.0", gasto: "2000.0" },
]

export default function TelaCategorias({ navigation }) {
  return (
    <View style={styles.container}>
      <ComponenteSuperCategoria rotulo='Necessidades' />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cards}>
        {data_categoria.map(item => (
          <ComponenteCategoria 
           rotulo={item.rotulo} 
           target={item.target} 
           atribuido={item.atribuido} 
           gasto={item.gasto} 
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    alignItems: "space-between",
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
});
