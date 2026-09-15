import {View, Text, TouchableOpacity, Image, StyleSheet} from "react-native";

export default function TelaModEd1({ navigation }) {
    return (

        <View style={styles.container}>
          <View style={styles.cabecario}>
            <Text style={styles.titulo}>Tela Mod Ed 1</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.botaoVoltar}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imagem}>
            <Image />
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>Lorem ipsum dolor sit amet</Text>
          </View>
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121315',
  },
  cabecario: {
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 48,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#fff",
  },
  botaoVoltar: {
    backgroundColor: "#28292e",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  conteudo: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#fff',
  },
});