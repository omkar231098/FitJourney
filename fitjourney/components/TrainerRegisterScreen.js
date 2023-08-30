import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button,Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const TrainerRegisterScreen = ({ navigation }) => {



    const navigateToUserRegister = () => {
        navigation.navigate('Register');
      };
    


  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleRegister = () => {
    // You can perform registration logic here
    // For now, let's just display the entered data


    if (!name || !age /* ... other conditions ... */) {
        Alert.alert('Validation Error', 'Please fill in all fields.');
        return;
      }


    console.log('Trainer Registration Data:', {
      name,
      gender,
      specialization,
      experience,
      email,
      contactNumber,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trainer Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Specialization"
        value={specialization}
        onChangeText={setSpecialization}
      />
      <TextInput
        style={styles.input}
        placeholder="Experience (years)"
        value={experience}
        onChangeText={setExperience}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={setContactNumber}
        keyboardType="phone-pad"
      />
      <Button title="Register as Trainer" style={styles.button} onPress={handleRegister} />
      <View style={styles.buttonSpacing} />
      <Button title="Switch to User Registration" onPress={navigateToUserRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign:'center'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    marginBottom: 10, // Add margin to the bottom of the first button
  },
  buttonSpacing: {
    height: 20, // Add space between buttons
  }
});

export default TrainerRegisterScreen;
