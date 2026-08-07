import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BarraProgresso({
    alvo,
    atribuido,
    gasto
}) {

    const alvoSafe = Math.max(alvo, 1);
    const progAtribuido = Math.min(atribuido / alvoSafe, 1);
    const progGasto = Math.min(gasto / alvoSafe, 1);
    const corBase = atribuido >= alvo ? "#22C55E" : "#F59E0B";

    let corGasto;

    if (gasto > atribuido) {
        corGasto = "#EF4444";
    } else {
        corGasto = atribuido >= alvo
            ? "#86EFAC"
            : "#FCD34D";
    }
// basicamente ele usa o progAtribuido e o progGasto para dar scale em views coloridas
// a cor dessas views depende de se o usuario ta fazendo merda ou nao
  return (
    <View style={styles.container}>

      <View
        style={[
          styles.atribuido,
          {
            width: `${progAtribuido * 100}%`,
            backgroundColor: corBase,
          },
        ]}
      />

      <View
        style={[
          styles.gasto,
          {
            width: `${progGasto * 100}%`,
            backgroundColor: corGasto,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 16,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },

  atribuido: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8,
  },

  gasto: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8,
  },
});