import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, Tabs } from "expo-router";

const App = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping</Text>
      <Text style={styles.subtitle}>Monte sua lista de compras para te ajudar nas compras</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.link}>Recuperar a senha</Text>
        <Text style={styles.link}>Criar minha conta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    color: '#8A2BE2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#32CD32',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row',
  },
  link: {
    color: '#808080',
    fontSize: 14,
    marginRight: 10,
  },
});

export default App;
