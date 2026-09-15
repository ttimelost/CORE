import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";

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
            <ImageBackground source={require('../../assets/images/educacao/modulo1CONTEUDOpng.jpg')} resizeMode="cover" style={styles.imagem} />
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.texto}>
              {"\u2003"} O dinheiro se apresenta como uma parte indispensavel em todas as nossas vidas.
              Aprender sobre dinheiro não significa saber investir ou ganhar muito, mas entender
              como organizar o que você recebe para conseguir pagar suas despesas, lidar com imprevistos 
              e alcançar seus objetivos.
            </Text>
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
    alignSelf: 'center',
  },
  conteudo: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'justify',
  },
});