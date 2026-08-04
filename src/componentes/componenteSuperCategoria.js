import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ComponenteSuperCategoria({
  rotulo,
}) {
    return(
      <View>
        <Text style={styles.supercategoria}>{rotulo}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  supercategoria: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#030303',
    backgroundColor: '#030303'
  }
})