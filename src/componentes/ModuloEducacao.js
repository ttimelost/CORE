import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function ModuloEducacao({ modulo, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.modulo}>
        <View style={styles.imagem}>
          <ImageBackground
            source={modulo.imagem}
            style={styles.imagem}
            resizeMode="cover"
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.titulo}>{modulo.titulo}</Text>
          <Text style={styles.texto}>{modulo.descricao}</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 16 }}>
            <TouchableOpacity style={styles.botao}>
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>▶</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  modulo: {
    backgroundColor: "#1b1c21",
    borderWidth: 1,
    borderColor: "#2d2f36",
    borderRadius: 20,
    width: "90%"
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    width: "100%",
  },
  imagem: {
    width :"auto",
    height: 160,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    overflow: "hidden"
  },
  texto: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    marginBottom: 16,
  },
  botao: {
    backgroundColor: "#2b8820",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
});