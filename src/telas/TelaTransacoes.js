import {
  View,
  Text,
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
      <View style={styles.header}>
        <Text style={styles.titulo}>Transações</Text>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => navigation.navigate("EditarTransacao")}
        >
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={transacoes}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <ItemTransacao transacao={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 16,
  },
  titulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  botaoAdicionar: {
    backgroundColor: "#356859",
    minHeight: 44,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  lista: {
    paddingBottom: 28,
  },
});
