import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [username, setusername] = useState('');

  const[erro, setErro] = useState(undefined);
  function validar(){
    const apenasLetras = /^[a-zA-Z]+$/;

    if(apenasLetras.test(username) == false){
      setErro('Username deve possuir apenas letras');
      return;
    }else{
      setErro(undefined);
    }

    if(username.length < 3){
      setErro('Username deve possuir pelo menos 3 letras');
      return;
    }else{
      setErro(undefined)
    }

    alert('Username Gravado')
  }


  return (
     <View style={styles.container}>
      <TextInput 
        placeholder='Digite seu username'
        onChangeText={setusername}
        value={username}
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
