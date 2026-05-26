import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')

  return (
     <View style={styles.container}>
      <TextInput 
        placeholder='Digite seu nome'
        onChangeText={setNome}
        value={nome}
        style={{borderWidth: 1, width: 200, marginVertical: 10, padding: 5}}/>

      {/*Exibe o Text apenas se a variavel erro for diferente de undefined*/}
      {{erro} && <Text style={{color: 'red'}}>{erro}</Text>}
      
      <Button title='Validar' onPress={validar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
