import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useContas } from "../contexts/ContasContext";

const formatarMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function TelaContas({ navigation }) {
  const { contas } = useContas();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Contas</Text>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => navigation.navigate("EditarConta")}
        >
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={contas}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma conta cadastrada.</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("EditarConta", { conta: item })}
          >
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              {item.tipo ? <Text style={styles.tipo}>{item.tipo}</Text> : null}
            </View>
            <Text style={styles.quantia}>
              {formatarMoeda.format(item.quantia ?? 0)}
            </Text>
          </TouchableOpacity>
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
  card: {
    backgroundColor: "#28292e",
    borderRadius: 8,
    marginVertical: 6,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nome: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  tipo: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
  quantia: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  vazio: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 24,
  },
});