import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

function SafeAreaLayout({children}) {
  return <SafeAreaView style={styles.block}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default SafeAreaLayout;
