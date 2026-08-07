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
  rotulo,
  target,
  atribuido,
  gasto
}) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{rotulo}</Text>
      <Text style={styles.cardBody}>
        Atribuído: {formatMoney(atribuido)}
      </Text>

      <BarraProgresso target={target} atribuido={atribuido} gasto={gasto} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.cardBody}>
          {calcularStatusMeta(target, atribuido)}
        </Text>
        <Text style={styles.cardBody}>
          Gasto: {formatMoney(gasto)}
        </Text>
        <Text style={styles.cardBody}>
          Alvo: {formatMoney(target)}
        </Text>
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
    color: "#222",
  },

  cardBody: {
    fontSize: 14,
    color: "#555",
  },

});
