import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import WriteHeader from '../components/write/WriteHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteBody from '../components/write/WriteBody';
import WriteFooter from '../components/write/WriteFooter';

function WriteScreen() {
  console.log('Write');
  return (
    <SafeAreaView style={styles.blocK}>
      <KeyboardAvoidingView style={styles.avodingView}>
        <WriteHeader />
        {/*
        TODO: 카테고리 추가하는 그런 느낌의 그걸 만들어야함.

        */}
        <WriteBody />
        <WriteFooter />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blocK: {flex: 1},
  avodingView: {
    flex: 1,
  },
});

export default WriteScreen;
