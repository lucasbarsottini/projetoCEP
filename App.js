import React, {useState} from "react";

import { Alert, Button, Text, TextInput, View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {





 const [endereco, setEndereco] = useState(null);

 const [campocep, setCep] = useState(null);





 const getCep = (cep) => {

  const endpoint = `http://viacep.com.br/ws/${cep}/json`;

  fetch(endpoint)



   .then(resposta => resposta.json())

   .then(json => {

    const endereco = {

     logradouro:json.logradouro,

     cidade:json.localidade

    };

    console.log(endereco);

    setEndereco(endereco);



   })



   .catch (()=> {

    Alert.alert('Erro','CEP INVALIDO');

   }

  

   )

 }



 return (

  <View style={styles.container}>

   <View style={styles.formContainer}>

    <TextInput

     style={styles.input}

     placeholder="Digite o CEP"

     onChangeText={setCep}

    />



    <Button

     title="Consultar CEP"

     onPress={() => getCep(campocep)}

    />

   </View>



   {endereco != null && (

    <View style={styles.resultContainer}>

     <Text style={styles.resultText}>Cidade: {endereco.cidade}</Text>

     <Text style={styles.resultText}>Rua: {endereco.logradouro}</Text>

    </View>

   )}



   <Text style={styles.nameText}>LLucas Fonseca Barsottini</Text>

  </View>

 );

}



const styles = StyleSheet.create({

 container: {

  flex: 1,

  backgroundColor: '#F5F5F5',

  alignItems: 'center',

  justifyContent: 'center',

 },

 formContainer: {

  alignItems: 'center',

  justifyContent: 'center',

  marginBottom: 20,

 },

 input: {

  width: '80%',

  height: 40,

  borderWidth: 2,

  borderColor: '#FFF2',

  borderRadius: 3,

  padding: 10,

  marginBottom: 10,

 },

 resultContainer: {

  alignItems: 'center',

  justifyContent: 'center',

  marginBottom: 20,

 },

 resultText: {

  fontSize: 18,

  fontWeight: 'bold',

  marginBottom: 5,

 },

 nameText: {

  fontSize: 45,

  fontWeight: 'bold',

  marginTop: 15,

 },

});