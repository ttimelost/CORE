import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ModuloEducacao from '../componentes/ModuloEducacao';
import { useEducacao } from '../contexts/EducacaoContext';

export default function TelaEducacao({ navigation }) {
  const { modulosEducacao } = useEducacao();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Educação</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Object.values(modulosEducacao)}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ModuloEducacao
            modulo={item}
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
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#1b1c21",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2d2f36",
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
    fontSize: 36,
    color: "#fff",
    marginBottom: 16,
  },
});