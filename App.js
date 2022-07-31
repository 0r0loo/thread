import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainScreen from './screens/MainScreen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={{flex: 1}}>
        <MainScreen />
      </SafeAreaView>
    </SafeAreaProvider>
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
