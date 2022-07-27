import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from './components/common/Icon';

function App() {
  return (
    <View>
      <Text style={styles.text}>안녕하세요</Text>
      <Text style={styles.text}>안녕하세요</Text>
      <Text style={styles.text}>안녕하세요</Text>
      <Text style={styles.text}>안녕하세요</Text>
      <Text style={styles.text}>안녕하세요</Text>
      <Icon
      // name={'add'}
      // folder={'round'}
      // // width={'20'}
      // // height={'20'}
      // fill="#0f0"
      />
    </View>
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
