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

export default function ComponenteCategoria({ categoria, navigation }) {
  const {
    icone,
    rotulo,
    tipoAlvo,
    alvo,
    atribuido,
    gasto } = categoria /* Encapsulei esse cocô por que senão fica uma bosta  */

  return (
    <TouchableOpacity /* Eu ainda não sei o comportamento ideal de quando clica na categoria,
    se deve abrir mesmo a tela de editar ela ou talvez abrir a tela de adicionar transacao com ela
    como a categoria da transação? */
      onPress={() => {
        navigation.navigate("EditarCategoria", {
          categoria,
        })
      }
      }
    >
      <View style={styles.cardContainer}>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 30 }}>
          <Text style={styles.cardTitle}>{icone}</Text>
          <Text style={styles.cardTitle}>{rotulo}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          <Text style={styles.cardBody}>Disponível: {formatMoney(atribuido - gasto)}</Text> {/*O que que isso significa???? r: veja o comentario no commit ef24418*/}
          <Text style={styles.cardBody}>Atribuído: {formatMoney(atribuido)}</Text>
          <Text style={styles.cardBody}>Alvo: {formatMoney(alvo)}</Text>
        </View>

        <BarraProgresso alvo={alvo} atribuido={atribuido} gasto={gasto} />

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
          <Text style={styles.cardBody}>{calcularStatusMeta(alvo, atribuido)}</Text>
        </View>

      </View>
    </TouchableOpacity>
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
