import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function ItemTransacao({ transacao }) {
  return (
    <View style={styles.container}>
      <Text>{transacao.valor}</Text>
      <Text>{transacao.beneficiario}</Text>
      <Text>{transacao.id_categoria}</Text>
      <Text>{transacao.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {

    }
})