import {View, Text, ImageBackground, TouchableOpacity, StyleSheet} from "react-native";
import Svg, { Path } from "react-native-svg";

export default function TelaBemVindo1({ navigation }) {
    return (

        <View style={styles.container}>
            <ImageBackground style ={styles.imagem} source={require("../../assets/images/fundobonito2.jpg")}
             resizeMode="cover">

                <Svg width="100%" height={100} style={styles.svg} viewBox="0 0 400 100">
                    <Path
                        d="
                          M-100 100
                          C100 0 300 0 500 100
                          L400 100
                          L0 100
                          Z
                        "
                        fill="#121315" />
                </Svg>
            </ImageBackground>

            <View style={styles.conteudo}>
                <View style={styles.card}>
                    <Text style={styles.titulo}> Bem vindo ao CORE </Text>

                    <Text style={styles.descricao}> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</Text>
                </View>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}> Avançar → </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    height: 350,
    width: "100%",
    justifyContent: "flex-end",
  },
  svg: {
    marginBottom: -1,
  },
  conteudo: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#121315",
  },
  card: {
    margin: "auto"
  },
  titulo: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
    textAlign: "center"
  },
  descricao: {
    textAlign: "center",
    marginTop: 45,
    color: "#d0d4dd",
    lineHeight: 22,
    fontSize: 16,
  },
  botao: {
    marginTop: "auto",
    marginBottom: 70,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 30,
    width: 220,
    height: 55,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    fontSize: 20,
    color: "black"
  },

});