
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {pesquisarNomeFruta} from '../pages/Frutas/ModelFrutas';


export default function Pesquisa(){
const [dadosFrutas, setDadosFrutas] = useState([]);

async function buscarFrutas(){
  const resultado = await pesquisarNomeFruta(nomeFruta);
  if(resultado){
    setDadosFrutas(resultado)
  }else {
    Alert.alert ('Fruta nao encontrada!!');
    setDadosFrutas('');
  }
}

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Qual Fruta vc deseja?</Text>
        <TextInput
        placeholder='Digite uma Fruta.'
        style={styles.TextInput}
        />

        <TouchableOpacity style={styles.botao} onPress={()=> buscarFrutas()}>
          <Text style={styles.textoBotao}> Pesquisar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    TextInput: {
      borderColor: '#e76f51',
      fontSize: 15,
      width:'80%',
      height: 30,
      borderWidth: 2,
      borderRadius: 8,
      marginTop: 25,
      paddingHorizontal: 10

    },
    botao: {
      backgroundColor: '#f4a261',
      marginTop: 15,
      padding: 10,
      borderRadius: 15,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textoBotao: {
      fontSize:15,
      fontWeight: '700',
      color: '#2a9d8f'
    },
    titulo: {
      fontSize: 30,
      color:'#2a9d8f'
    }
});