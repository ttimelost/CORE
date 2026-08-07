import React from "react";
import { View, Text, StyleSheet } from "react-native";


function calcular_faltando_e_mensagem_merenomeie(alvo, assigned) {
  if (alvo == assigned) {
    return ('Prontiu')
  }
  else if (assigned > alvo) {
    return "Sobrando " + (assigned - alvo);
  }
  else {
    return "Faltam " + (alvo - assigned)
  }
}

export default function ComponenteCategoria({
  rotulo,
  target,
  targetType,
  atribuido,
  gasto,
}) {
  return (
    <View style={styles.cardContainer}>

      <Text style={styles.cardTitle}>{rotulo}</Text>
      <Text style={styles.cardBody}>Atribuído: {atribuido}</Text>
      <Text style={styles.progressBar}>
        finge que tem uma progress bar bonitinha aqui
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.cardBody}>{calcular_faltando_e_mensagem_merenomeie(target, atribuido)}</Text>
        <Text style={styles.cardBody}>Alvo: {target}</Text>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
  cardBody: {
    fontSize: 14,
    color: "#d0d4dd",
  },
  progressBar: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#ffffff",
    marginVertical: 8,
  },

});
