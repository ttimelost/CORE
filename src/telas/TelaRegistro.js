import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function App() {
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(undefined);

  function validar() {
    if (password.length < 8)
      return "Senha deve possuir pelo menos 8 caracteres";
  }

  function salvar() {
    const mensagemErro = validar();

    setErro(mensagemErro);

    if (!mensagemErro) {
      alert("Senha gravada");
    }
  }

  return (
    <View style={styles.tudo}>
      <Image
        style={styles.icon}
        source={require("./assets/images/icone.png")}
      />
      <View style={styles.container}>
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
        <Button title="Avançar" onPress={salvar} color="#10B981" /> {/* TO-DO: TouchableOpacity e adicionar navegação */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: "#121315",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  container: {
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  icon: {
    width: 60,
    height: 60,
    marginLeft: 10,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    width: "85%",
    marginVertical: 15,
    padding: 10,
    borderRadius: 8,
    borderColor: "#fff",
    backgroundColor: "#1f1f25",
    color: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
    width: "85%",
    alignSelf: "flex-start",
    marginLeft: "7.5%",
  },
  dica: {
    color: "#fff",
    fontWeight: 600,
    width: "85%",
    marginVertical: 5,
    alignSelf: "flex-start",
    marginLeft: "7.5%",
  },
  buttonWrapper: {
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
  },
});
