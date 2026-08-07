import { View, StyleSheet, SectionList } from "react-native";

import ComponenteCategoria from "../componentes/componenteCategoria";
import ComponenteSuperCategoria from "../componentes/componenteSuperCategoria";

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
        keyExtractor={(item) => item.rotulo}
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
  },
  list: {
    width: "100%",
  },
  contentList: {
    paddingBottom: 24,
  },
});
