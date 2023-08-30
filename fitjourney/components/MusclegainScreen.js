import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MusclegainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Muscle Gain</Text>
      {/* Add content for the Weight Loss screen */}
    </View>
  )
}

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