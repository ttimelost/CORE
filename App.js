import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");

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

    alert("Username Gravado");
  }

  return (
    <View>
      <View style={styles.LogoTitulo}>
        <Texto>CORE</Texto>
        <Image style={styles.icon} source={require("./assets/icone.png")} />
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="Digite seu username"
          onChangeText={setUsername}
          value={username}
          style={{
            borderWidth: 1,
            width: 200,
            marginVertical: 10,
            padding: 5,
          }}
        />

        {erro && <Text style={{ color: "red" }}>{erro}</Text>}

        <Button title="Validar" onPress={validar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
