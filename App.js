import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import NavegacaoStack from "./src/navegacao/NavegacaoStack"
import { NavigationContainer } from '@react-navigation/native';

const NavegadorAtual = NavegacaoStack

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
    <NavigationContainer>
      <NavegadorAtual />
    </NavigationContainer>
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