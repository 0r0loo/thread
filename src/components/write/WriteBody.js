import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function WriteBody() {
  const bodyRef = useRef();
  // TODO : 스크롤 되어야함.
  return (
    <View style={styles.block}>
      <Text style={styles.category}>💖</Text>
      <Text style={styles.date}>2022년 7월 31일, 오늘</Text>
      <TextInput
        placeholder={'제목을 입력해주세요!'}
        style={styles.titleInput}
        returnKeyType={'next'}
        onSubmitEditing={() => bodyRef.current.focus()}
      />
      <TextInput
        placeholder={'무슨 생각을 하고 계세요?'}
        style={styles.bodyInput}
        multiline
        textAlignVertical={'top'}
        // maxLength={150}
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'pink',
  },
  category: {
    fontSize: 32,
    marginBottom: 20,
  },
  date: {
    marginBottom: 8,
    color: '#A5A39B',
    fontFamily: 'MinSans-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  titleInput: {
    fontFamily: 'MinSans-Bold',
    fontSize: 27,
    color: '#31302B',
    marginBottom: 20,
  },
  bodyInput: {
    fontFamily: 'MinSans-Regular',
    fontSize: 18,
    color: '#31302B',
    lineHeight: 27,
  },
});

export default WriteBody;
