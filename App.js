import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  text: {
    fontFamily: 'MinSans-Bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
