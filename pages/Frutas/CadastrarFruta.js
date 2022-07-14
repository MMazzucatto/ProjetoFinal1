import React, {useState} from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native-web";
import {salvarNovaFruta} from './ModelFrutas';

export default function CadastrarFruta({navigation}) {
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function cadastro(){
        const resultado = await salvarNovaFruta (idp, frutap, valorp, fotop);
        if (resultado === 'Sucesso') {
            Alert.alert('Fruta acadastrada com sucesso!!');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao cadastrar a fruta');
        }
    }

     return(
        <View style ={estilo.container}>
        <TextInput
            value = {idp}
            placeholder = "Digite o codigo da fruta"
            style={estilo.textInputTodos}
            onChangeText={setIdp}
        />
        <TextInput
            value = {frutap}
            placeholder = "Digite o nome da fruta"
            style={estilo.textInputTodos}
            onChangeText={setFrutap}
        />
        <TextInput
            value = {valorp}
            placeholder = "Digite o valor da fruta"
            style={estilo.textInputTodos}
            onChangeText={setValorp}
        />
        <TextInput
            value = {fotop}
            placeholder = "Digite o link da fruta"
            style={estilo.textInputTodos}
            onChangeText={setFotop}
        />

        <TouchableOpacity style = {estilo.botaoCadastrar} onPress={cadastro}>
            <Text style={estilo.TextoBotaoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>

    </View>
    
     );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e9c46a',
        paddingTop:50
    },
    botaoCadastrar:{
        backgroundColor:'#2a9d8f',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
    textInputTodos:{
        fontSize:18
    },
})