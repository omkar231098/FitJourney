import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const FitnessGoalsScreen = ({ navigation }) => {
  const handleSelectGoal = (goal) => {
    navigation.navigate(goal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goalCard}
        onPress={() => handleSelectGoal('WeightLoss')}
      >
        <Image
          source={require('../assets/img/weightloss.jpg')} // Replace with your image source
          style={styles.goalImage}
        />
        <Text style={styles.goalTitle}>Weight Loss</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.goalCard}
        onPress={() => handleSelectGoal('MuscleGain')}
      >
        <Image
          source={require('../assets/img/musclegain.jpg')} // Replace with your image source
          style={styles.goalImage}
        />
        <Text style={styles.goalTitle}>Muscle Gain</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.goalCard}
        onPress={() => handleSelectGoal('CardioFitness')}
      >
        <Image
          source={require('../assets/img/cardio.jpg')} // Replace with your image source
          style={styles.goalImage}
        />
        <Text style={styles.goalTitle}>Cardio Fitness</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '80%',
  },
  goalImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FitnessGoalsScreen;
