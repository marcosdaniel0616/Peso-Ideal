import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { set } from 'react-native-reanimated';

import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
  
} from 'react-native-simple-radio-button';

export default function App() {
  let [altura, setAltura] = useState('')
  let [sexoEscolhido, setSexoEscolhido] = useState(-1)
  let [pesoIdeal, setpesoIdeal] = useState()

  var sexoRadio = [
    {label: "Masculino", value: 0},
    {label: "Feminino", value: 1}
  ]

  if (sexoEscolhido === 0){
    pesoIdeal = (72.7 * altura) - 58;
  }
  else if (sexoEscolhido === 1){
    pesoIdeal = (62.1 * altura) - 44.7;
  }
  
  return(
    <View style={styles.container}>

      <Text>Aplicativo de calculo do peso ideal</Text>
      <Text>Informe sua altura. Ex: 1.70</Text>

      <TextInput style={styles.input}
        keyboardType='numeric'
        onChangeText={(alt) => setAltura(alt)}
      />

      <StatusBar style="auto" />

      <RadioForm
        radio_props={sexoRadio}
        initial={-1}
        onPress={(value) => {setSexoEscolhido(value)}}
      />

      <Text>Seu peso ideal é: {pesoIdeal.toFixed(2)}</Text>

    </View>
  );
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,
    textAlign: 'center'
  },
});