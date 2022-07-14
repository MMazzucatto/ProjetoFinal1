import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import api from './Api';

export default function Frutas(){
const [dadosFrutas, setDadosFrutas] = useState([]);

async function getFrutas(){
  try{
    const resultado = await api.get("/hf");
    return resultado.data
  }catch(error){
    console.log(error)
    return[]
  }
}

useEffect(async()=>{
  const resp = await getFrutas()
  setDadosFrutas(resp);
},[]);


    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Frutas</Text>

        <FlatList
        data={dadosFrutas}
        keyExtractor={dadosFrutas => dadosFrutas.id}
        renderItem={({item})=>
        <TouchableOpacity style={styles.botaoFrutas}>
        <View style={styles.grupoFrutas}>
            <Text style={styles.textoBotaoFruta}>{item.fruta}</Text>
            <Text style={styles.textoBotaoValor}>{item.valor}</Text>
          

        </View>
        </TouchableOpacity>
        }
        />

        <StatusBar style="auto" />
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
    titulo:{
      fontSize: 30,
      color:'#2a9d8f' 
    },
    grupoFrutas:{

    },
    botaoFrutas:{

    },
    textoBotaoFruta:{

    },
    textoBotaoValor:{

    }
});