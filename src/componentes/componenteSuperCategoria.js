import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ComponenteSuperCategoria({ grupo, navigation }) {
  return (
    <View>
      <Text style={styles.titulo}>{grupo}</Text>
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
