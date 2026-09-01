import { View, StyleSheet, SectionList } from "react-native";

import ComponenteCategoria from "../componentes/componenteCategoria";
import ComponenteSuperCategoria from "../componentes/componenteSuperCategoria";

const categorias = [
  {
    id: "1",
    titulo: "Needs",
    rotulo: "🛒 Mercado",
    tipoAlvo: "",
    alvo: 200,
    atribuido: 100,
    gasto: 12,
  },
  {
    id: "2",
    titulo: "Needs",
    rotulo: "⛽ Gasolina",
    tipoAlvo: "",
    alvo: 2000,
    atribuido: 9,
    gasto: 2000,
  },
  {
    id: "3",
    titulo: "Wants",
    rotulo: "Explorações intergaláticas",
    tipoAlvo: "",
    alvo: 2000000,
    atribuido: 9,
    gasto: 2000,
  },
  {
    id: "4",
    titulo: "Wants",
    rotulo: "Papelaria",
    tipoAlvo: "",
    alvo: 100,
    atribuido: 100,
    gasto: 0,
  },
  {
    id: "5",
    titulo: "Teste",
    rotulo: "Categoria vazia",
    tipoAlvo: "",
    alvo: 0,
    atribuido: 0,
    gasto: 0,
  },
];

const sections = Array.from(new Set(categorias.map((item) => item.titulo))).map(
  (titulo) => ({
    titulo,
    data: categorias.filter((item) => item.titulo === titulo),
  }),
);

export default function TelaCategorias({ navigation }) {
  return (
    <View style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        renderSectionHeader={({ section }) => (
          <ComponenteSuperCategoria rotulo={section.titulo} />
        )}
        renderItem={({ item }) => (
          <ComponenteCategoria
            rotulo={item.rotulo}
            tipoAlvo={item.tipoAlvo}
            alvo={item.alvo}
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
