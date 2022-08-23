import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';

function WriteBody({isTitle, title, onChangeTitle, content, onChangeContent}) {
  const bodyRef = useRef();

  // TODO : 스크롤 되어야함.
  return (
    <View style={styles.block}>
      {/* TODO: 카테고리 하드코딩 X */}
      <Text style={styles.category}>🔥</Text>
      {/* TODO: 오늘까지 추가되게 수정해야함~ */}

      <Text style={styles.date}>{format(new Date(), 'PPP', {locale: ko})}</Text>

      {isTitle && (
        <TextInput
          placeholder={'제목을 입력해주세요!'}
          style={styles.titleInput}
          returnKeyType={'next'}
          onSubmitEditing={() => bodyRef.current.focus()}
          onChangeText={onChangeTitle}
          value={title}
        />
      )}
      <TextInput
        placeholder={'무슨 생각을 하고 계세요?'}
        style={styles.bodyInput}
        multiline
        textAlignVertical={'top'}
        onChangeText={onChangeContent}
        // maxLength={150}
        value={content}
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
    flex: 1,
  },
});

export default WriteBody;
