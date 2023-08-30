import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button ,Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RegisterScreen = ({ navigation }) => {

    const handleTrainerRegistration = () => {
  navigation.navigate('TrainerRegister'); // This will navigate to the TrainerRegister screen
};

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleRegister = () => {
    // You can perform registration logic here
    // For now, let's just display the entered data

    if (!name || !age || !height || !weight || !email || !contactNumber) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    console.log('Registration Data:', {
      name,
      age,
      gender,
      height,
      weight,
      email,
      contactNumber,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
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
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
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
      <Button title="Register as User" onPress={handleRegister} />
      <View style={styles.buttonSpacing} />
      <Button style={styles.trainerbtn}
        title="Switch to Trainer Registration"
        onPress={handleTrainerRegistration}
      />
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
 
  buttonSpacing: {
    height: 20, // Add space between buttons
  },
  trainerbtn:{
    backgroundColor:'#6f55f2'
  }
});

export default RegisterScreen;
