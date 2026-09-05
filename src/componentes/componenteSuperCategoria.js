import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ComponenteSuperCategoria({ rotulo, navigation }) {
  return (
    <View>
      <Text style={styles.titulo}>{rotulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    padding: 15,
  },
});
