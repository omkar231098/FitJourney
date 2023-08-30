import React from 'react';
import { View, Text } from 'react-native';
import CustomNavigationBar from './CustomNavigationBar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomNavigationBar navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
