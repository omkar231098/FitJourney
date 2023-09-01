import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import TrainerRegisterScreen from './TrainerRegisterScreen';
import FitnessGoalsScreen from './FitnessGoalsScreen';
import WeightLossScreen from './WeightLossScreen';
import MusclegainScreen from './MusclegainScreen';
import CardioScreeen from './CardioScreeen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import WorkoutLogScreen from './WorkoutLogScreen'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="TrainerRegister" component={TrainerRegisterScreen} />
        <Stack.Screen name="FitnessGoals" component={FitnessGoalsScreen} />
        <Stack.Screen name="WeightLoss" component={WeightLossScreen} />
        <Stack.Screen name="MuscleGain" component={MusclegainScreen} />
        <Stack.Screen name="CardioFitness" component={CardioScreeen} />
        <Stack.Screen name="WorkoutLog" component={WorkoutLogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
