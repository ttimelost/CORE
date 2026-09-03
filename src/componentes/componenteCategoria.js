import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BarraProgresso from "./BarraProgresso";

const formatarMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function formatMoney(value) {
  return formatarMoeda.format(value ?? 0);
}

function calcularStatusMeta(alvo, atribuido) {
  if (alvo === atribuido) {
    return "Pronto";
  }

  if (atribuido > alvo) {
    return `Sobrando ${formatMoney(atribuido - alvo)}`;
  }

  return `Faltam ${formatMoney(alvo - atribuido)}`;
}

export default function ComponenteCategoria({
  icone,
  rotulo,
  tipoAlvo,
  alvo,
  atribuido,
  gasto,
}) {
  return (
    <View style={styles.cardContainer}>

      <View style={{ flexDirection: "row", justifyContent : "space-between", marginBottom: 30 }}>
        <Text style={styles.cardTitle}>{icone}</Text>
        <Text style={styles.cardTitle}>{rotulo}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent : "space-between", marginBottom: 10 }}>
        <Text style={styles.cardBody}>Disponível: {formatMoney(atribuido-gasto)}</Text> {/*O que que isso significa????*/}
        <Text style={styles.cardBody}>Atribuído: {formatMoney(atribuido)}</Text>
        <Text style={styles.cardBody}>Alvo: {formatMoney(alvo)}</Text>
      </View>

      <BarraProgresso alvo={alvo} atribuido={atribuido} gasto={gasto}/>

      <View style={{ flexDirection: "row", justifyContent: "left", marginTop: 10 }}>
        <Text style={styles.cardBody}>{calcularStatusMeta(alvo, atribuido)}</Text>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#28292e",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },

  cardBody: {
    fontSize: 14,
    color: "#fff",
    padding: 2,
  },

});
