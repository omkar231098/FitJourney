import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeightLossScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight Loss</Text>
      {/* Add content for the Weight Loss screen */}
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
});

export default WeightLossScreen;
