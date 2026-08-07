import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ComponenteCategoria from "../componentes/componenteCategoria";
import ComponenteSuperCategoria from "../componentes/componenteSuperCategoria";
import { ScrollView, SectionList } from "react-native-web";

const data_categoria = [
  { rotulo: "🛒Mercado", target: "200.0", atribuido: "100.0", gasto: "12" },
  { rotulo: "⛽Gasolina", target: "2000.0", atribuido: "9.0", gasto: "2000.0" },
  { rotulo: "Explorações intergaláticas", target: "2000000.0", atribuido: "9.0", gasto: "2000.0" },
  { rotulo: "⛽Gasolina de niovo", target: "2000.0", atribuido: "9.0", gasto: "2000.0" },
]

const novo_data = [
  {
    titulo: "Needs",
    data: [
      {
        rotulo: "🛒 Mercado",
        target: 200,
        atribuido: 100,
        gasto: 12,
      },
      {
        rotulo: "⛽ Gasolina", target: 2000, atribuido: 9, gasto: 2000,
      },
    ],
  },
  {
    titulo: "Wants",
    data: [
      {
        rotulo: "Explorações intergaláticas", target: 2000000, atribuido: 9, gasto: 2000,
      },
      {
        rotulo: "Papelaria", target: 100, atribuido: 100, gasto: 0,
      },
    ],
  },
];

export default function TelaCategorias({ navigation }) {
  return (
    <View style={styles.container}>
      <SectionList
        sections={novo_data}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        renderSectionHeader={({ section }) => (
          <ComponenteSuperCategoria rotulo={section.titulo} />
        )}
        renderItem={({ item }) => (
          <ComponenteCategoria
            rotulo={item.rotulo}
            target={item.target}
            targetType={item.targetType}
            atribuido={item.atribuido}
            gasto={item.gasto}
          />
        )}
      />
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
  list: {
    width: "100%",
  },
  contentList: {
    width: "100%",
    maxWidth: 600,
    paddingBottom: 24,
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
