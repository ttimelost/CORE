import { View, StyleSheet, SectionList } from "react-native";

import ComponenteCategoria from "../componentes/componenteCategoria";
import ComponenteSuperCategoria from "../componentes/componenteSuperCategoria";
import { Button } from "react-native-web";

const novo_data = [
  {
    titulo: "Needs",
    data: [
      {
        rotulo: "🛒 Mercado",
        alvo: 200,
        atribuido: 100,
        gasto: 12,
      },
      {
        rotulo: "⛽ Gasolina",
        alvo: 2000,
        atribuido: 9,
        gasto: 2000,
      },
    ],
  },
  {
    titulo: "Wants",
    data: [
      {
        rotulo: "Explorações intergaláticas",
        alvo: 2000000,
        atribuido: 9,
        gasto: 2000,
      },
      {
        rotulo: "Papelaria",
        alvo: 100,
        atribuido: 100,
        gasto: 0,
      },
    ],
  },
  {
    titulo: 'teste',
    data: []
  }
];

export default function TelaCategorias({ navigation }) {
  return (
    <View style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
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
            alvo={item.alvo}
            alvoType={item.tipoAlvo}
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
  },
  list: {
    width: "90%",
  },
  contentList: {
    paddingBottom: 24,
  },
});
