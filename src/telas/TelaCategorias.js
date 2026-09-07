import React from "react";
import { Text, View, StyleSheet, SectionList } from "react-native";
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
      <View style={{ alignItems: "left" }}>
        <Text style={styles.titulo}>Temporario</Text>
      </View>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        renderSectionHeader={({ section }) => (
          <ComponenteSuperCategoria
            rotulo={section.titulo}
            navigation={navigation}
          />
        )}
        renderItem={({ item }) => (
          <ComponenteCategoria
            categoria={item}
            navigation={navigation}
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
    paddingHorizontal: 5,
    paddingVertical: 24,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#fff",
    marginBottom: 48,
    marginTop: 48
  },
  list: {
    width: "90%",
  },
  contentList: {
    paddingBottom: 24,
  },
});
