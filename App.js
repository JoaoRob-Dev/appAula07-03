import React, {useState} from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function App() {
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');

function soma(){
  const resultado = parseFloat(num1) + parseFloat(num2);
  alert('o resultado é: ' + resultado);
}

function sub(){
  const resultado = parseFloat(num1) - parseFloat(num2);
  alert('o resultado é: ' + resultado);
}

function div(){
  const resultado = parseFloat(num1) / parseFloat(num2);
  alert('o resultado é: ' + resultado);
}
    
function mult(){
  const resultado = parseFloat(num1) * parseFloat(num2);
  alert('o resultado é: ' + resultado);
}

  return (
    <View style={styles.container}>
  <Text style={styles.titulo}>Soma de Valores</Text>

  <TextInput style={styles.input}KeyboardType="numeric" placeholder='Digite um Número'
  onChangeText={(num1)=>setnum1(num1)}/>

    <TextInput style={styles.input}KeyboardType="numeric" placeholder='Digite um Número' onChangeText={(num2)=>setnum2(num2)}/>

    <TouchableOpacity style={styles.btn1} onPress={soma}><Text style={styles.titulobtn}> Somar </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn2} onPress={sub}><Text style={styles.titulobtn}> Subtrair </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn3} onPress={mult}><Text style={styles.titulobtn}> Multiplicar </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn4} onPress={div}><Text style={styles.titulobtn}> Dividir </Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    borderRadius: 15,
    margin: 10,
    padding: 10,
    fontSize: 25,
    color: 'black',
    border: 'solid 1px black',
  },

  btn1:{
    alignItems:'center',
    backgroundColor: 'red',
    margin: 2,
    borderRadius: 10,
    padding: 15,
    marginTop: '5rem',
  },
    btn2:{
    alignItems:'center',
    backgroundColor: 'blue',
    margin: 2,
    borderRadius: 10,
    padding: 15,
  },
    btn3:{
    alignItems:'center',
    backgroundColor: 'green',
    margin: 2,
    borderRadius: 10,
    padding: 15,
  },
    btn4:{
    alignItems:'center',
    backgroundColor: 'yellow',
    margin: 2,
    borderRadius: 10,
    padding: 15,
  },
  titulobtn:{
    fontSize: 25,
    color: '#fff',
  }
});