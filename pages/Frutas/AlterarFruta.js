import React, {useState} from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native-web";
import {alterarFrutas, deletarFrutas} from './ModelFrutas';

export default function AlterarFruta(){
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function alterar(){
        const resultado = await alterarFrutas (idp, frutap, valorp, fotop);
        if(resultado == 'Sucesso') {
            Alert.alert('Fruta alterada com sucesso!!');
        } else {
            Alert.alert('Erro ao cadastrar a fruta');
        }
    }
    async function deletar(){
        const resultado =  await deletarFrutas(idp);
        if (resultado == 'Sucesso') {
            Alert.alert('Fruta deletada com Sucesso');
        }else{
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
            value = {idp}
            placeholder = "Digite o link da fruta"
            style={estilo.textInputTodos}
            onChangeText={setFotop}
            />

            <TouchableOpacity style = {estilo.botaoCadastrar} onPress={alterar}>
                <Text style={estilo.TextoBotaoCadastrar}>Alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {estilo.botaoCadastrar} onPress={alterar}>
                <Text style={estilo.TextoBotaoCadastrar}>Alterar</Text>
            </TouchableOpacity>

            </View>
     );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e9c46a'
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