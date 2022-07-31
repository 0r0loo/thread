import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';

function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.header}>이 곳에 생각을 정리해보세요.</Text>
      <Text style={styles.body}>스레드에서 생각의 흐름을 따라가보세요.</Text>
      <CustomButton title={'글 작성하기'} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    fontFamily: 'MinSans-Medium',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 148,
    marginBottom: 8,
  },
  body: {
    fontFamily: 'MinSans-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#A5A39B',
    marginBottom: 20,
  },
  button: {},
});

export default Empty;
