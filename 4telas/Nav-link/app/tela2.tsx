import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';



const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Compras</Text>
      </View>
      <View style={styles.itemContainer}>
        <TextInput style={styles.input} placeholder="Digite o produto" />
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Feather name="shopping-cart" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemName}>Café</Text>
        <Text style={styles.itemQuantity}>Quantidade: 3</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Feather name="check" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Feather name="trash-2" size={24} color="#FFFFFF" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemName}>Pacote de Arroz</Text>
        <Text style={styles.itemQuantity}>Quantidade: 2</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Feather name="check" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Feather name="trash-2" size={24} color="#FFFFFF" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemName}>Suco de Laranja</Text>
        <Text style={styles.itemQuantity}>Quantidade: 1</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Feather name="check" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Feather name="trash-2" size={24} color="#FFFFFF" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#6050DC',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  clearButton: {
    backgroundColor: '#454545',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: '#32CD32',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor:'#F5F5F5',
    borderRadius: 5,
    marginTop: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#808080',
  },
  checkButton: {
    backgroundColor: '#32CD32',
    borderRadius: 5,
    padding: 10,
  },
  deleteButton: {
    backgroundColor:'red',
    borderRadius: 10,
    padding:10,
  },
  deleteIcon: {
    color: '#FFFFFF',
  },
});

export default App;
