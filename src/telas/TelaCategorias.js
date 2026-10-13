import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SectionList } from "react-native";
import ComponenteCategoria from "../componentes/componenteCategoria";
import ComponenteSuperCategoria from "../componentes/componenteSuperCategoria";
import * as CategoriaDAO from '../dao/categoriaDAO'

export default function TelaCategorias({ navigation }) {
  const { categorias, setCategorias } = useState([]);
  const { nome, setNome } = useState('')
  const { nome_super_categoria, setNome_super_categoria } = useState('')
  const { alvo, setAlvo } = useState(null)
  const { atribuido, setAtribuido } = useState(null)

  useEffect(() => {
    async function setup() {
      try {
        await CategoriaDAO.iniciarTabela();
        await carregarCategorias();
      } catch (error) {
        console.error("Erro ao inicializar o app: ", error);
      }
    }
    setup();
  }, []);

  async function carregarCategorias() {
    try {
      const dados = await CategoriaDAO.listarTodos();

      const dadosFormatados = dados.map(function (item) {
        return {
          ...item // sei lá vai que precisa dps ne
        };
      });
      setCategorias(dadosFormatados);
    } catch (error) {
      console.error("Erro ao carregar dados: ", error);
    }
  }

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
    margin: 48,
  },
  list: {
    width: "90%",
    marginBottom: 50,
  },
  contentList: {
    paddingBottom: 24,
  },
});
