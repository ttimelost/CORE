import React from "react";
import { View, StyleSheet, SectionList } from "react-native";
import ComponenteCategoria from "../componentes/componenteCategoria";
import ComponenteSuperCategoria from "../componentes/componenteSuperCategoria";
import { useCategorias } from "../contexts/CategoriasContext";

export default function TelaCategorias({ navigation }) {
  const { categorias } = useCategorias();

  const sections = Array.from(new Set(categorias.map((item) => item.titulo))).map(
    (titulo) => ({
      titulo,
      data: categorias.filter((item) => item.titulo === titulo),
    })
  );

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
