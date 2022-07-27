import React from 'react';
import {StyleSheet, Text} from 'react-native';

function App() {
  return <Text style={styles.text}>안녕하세요</Text>;
}

const styles = StyleSheet.create({
  block: {},
  text: {
    fontFamily: 'MinSans-Bold',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
