import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        HEH - Bem-vindo ao projeto final, eu acho
      </Text>

      <Text style={styles.subtitulo}>
      CORE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00f7ff',
    textShadowColor: '#00f7ff',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 20,
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.85,
  },
});