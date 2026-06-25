import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula uma busca de dados ou processo de 3 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.bola} size="large" color="rgb(83, 83, 83)" />
        <Text style={styles.titulo}>CORE</Text>
      </View>
    );
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Bu</Text>
    </View>
  )

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
    color: '#cecece',
    textShadowRadius: 20,
    marginBottom: 15,
  },
  bola: {
    padding: 20,
  }
});