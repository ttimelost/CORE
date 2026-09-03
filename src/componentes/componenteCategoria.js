import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
        <Text style={styles.cardBody}>{calcularStatusMeta(alvo, atribuido)}</Text>
        <TouchableOpacity style={styles.botao_remover}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Remover</Text>
        </TouchableOpacity>
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

  botao_remover: {
    borderRadius: 10,
    backgroundColor: 'red',
    padding: 5
  }

});
