import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import ItemTransacao from "../componentes/itemTransacao";
import { useTransacoes } from "../contexts/TransacoesContext";

export default function TelaTransacoes({ navigation }) {
  const { transacoes } = useTransacoes();

  return (
    <View style={styles.container}>
      <Text>Transações</Text>

      <FlatList
        keyExtractor={(item) => item.id}
        data={transacoes}
        renderItem={({ item }) => (
          <ItemTransacao transacao={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
