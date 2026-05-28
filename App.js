import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [erro, setErro] = useState(undefined);
  function validar() {
    const apenasLetras = /^[a-zA-Z]+$/;

    if (apenasLetras.test(username) == false) {
      setErro("Username deve possuir apenas letras");
      return;
    } else {
      setErro(undefined);
    }

    if (username.length < 3) {
      setErro("Username deve possuir pelo menos 3 letras");
      return;
    } else {
      setErro(undefined);
    }

    if (password.length < 8) {
      setErro("Senha deve possuir pelo menos 8 caracteres");
      return;
    } else {
      setErro(undefined);
    }

    alert("Username e senha gravados");
  }

  return (
    <View style={styles.tudo}>
      <View style={styles.CaixaLogin}>
        <View style={styles.LogoTitulo}>
          <Text style={styles.titulo}>CORE</Text>
          <Image style={styles.icon} source={require("./assets/images/icone.png")} />
        </View>

        <View style={styles.container}>
          <TextInput
            placeholder="Digite um username"
            placeholderTextColor="#ccc"
            onChangeText={setUsername}
            value={username}
            style={styles.input}
          />
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#ccc"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            style={styles.input}
          />

          {erro && <Text style={styles.error}>{erro}</Text>}

          <Button title="Avançar" onPress={validar} color="#10B981" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: "#121315",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  LogoTitulo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    borderColor: "#fff",
    backgroundColor: "#1f1f25",
    color: '#fff',
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  CaixaLogin: {
    backgroundColor: "#3c3f46",
    borderRadius: 25,
    padding: 20,
    textColor: "#121315",
  },
});
