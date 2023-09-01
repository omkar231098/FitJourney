import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
const WorkoutLogScreen = () => {
  const [workoutEntries, setWorkoutEntries] = useState([]);
  const [date, setDate] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState('');
  const [exercises, setExercises] = useState('');
  const [duration, setDuration] = useState('');

  const handleSaveWorkout = () => {
    const newEntry = { date, workoutPlan, exercises, duration };
    setWorkoutEntries([...workoutEntries, newEntry]);
    setDate('');
    setWorkoutPlan('');
    setExercises('');
    setDuration('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Log</Text>
      <View style={styles.formContainer}>
        <Text>Date:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
        />

        <Text>Workout Plan:</Text>
        <TextInput
          style={styles.input}
          value={workoutPlan}
          onChangeText={setWorkoutPlan}
        />

        <Text>Exercises:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          multiline
          value={exercises}
          onChangeText={setExercises}
        />

        <Text>Duration (minutes):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={duration}
          onChangeText={setDuration}
        />

        <Button title="Save Workout" onPress={handleSaveWorkout} />
      </View>

      <ScrollView style={styles.logContainer}>
        {workoutEntries.map((entry, index) => (
          <View key={index} style={styles.logEntry}>
            <Text>Date: {entry.date}</Text>
            <Text>Workout Plan: {entry.workoutPlan}</Text>
            <Text>Exercises: {entry.exercises}</Text>
            <Text>Duration: {entry.duration} minutes</Text>
          </View>
        ))}
      </ScrollView>
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
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  logContainer: {
    flex: 1,
  },
  logEntry: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
});

export default WorkoutLogScreen;
