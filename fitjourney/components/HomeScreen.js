import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomNavigationBar from './CustomNavigationBar';

const HomeScreen = ({ navigation }) => {

  const navigateToFitnessGoals = () => {
    navigation.navigate('FitnessGoals');
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomNavigationBar navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToFitnessGoals}
        >
          <Text style={styles.buttonText}>Set Fitness Goal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HomeScreen;