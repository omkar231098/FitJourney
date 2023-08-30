import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomNavigationBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default CustomNavigationBar;
