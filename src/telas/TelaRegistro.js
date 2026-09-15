import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function TelaRegistro({ navigation }) {
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  function validar() {
    if (password.length < 6)
      return "Erro: Senha muito pequena";
  }

  function salvar() {
    const mensagemErro = validar();

    setErro(mensagemErro);

    if (!mensagemErro) {
      alert("Senha registrada!")
      navigation.navigate("Principal")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.tudo}>
        <Text style={styles.dica}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          style={styles.input}
        />

        {erro && <Text style={styles.error}>{erro}</Text>}
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  tudo: {
    width: "100%",
    maxWidth: 360,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#1b1c21",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2d2f36",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    width: "100%",
    marginTop: 8,
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    borderColor: "#3f424b",
    backgroundColor: "#25262d",
    color: "#fff",
  },
  error: {
    color: "#ff6b6b",
    marginBottom: 8,
    width: "100%",
    alignSelf: "stretch",
  },
  dica: {
    color: "#fff",
    fontWeight: "600",
    width: "100%",
    marginBottom: 4,
  },
  botao: {
    margin: 30,
    borderWidth: 2,
    borderColor: "#2b8820",
    backgroundColor: "#2b8820",
    borderRadius: 30,
    width: 220,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});
