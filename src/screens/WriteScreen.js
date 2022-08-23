import React, {useContext, useEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import WriteHeader from '../components/write/WriteHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteBody from '../components/write/WriteBody';
import WriteFooter from '../components/write/WriteFooter';
import WriteCategory from '../components/write/WriteCategory';
import threadContext from '../contexts/ThreadContext';
import {useNavigation} from '@react-navigation/native';

function WriteScreen() {
  const [isCategory, setIsCategory] = useState(true);
  const [isTitle, setIsTitle] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {onCreate} = useContext(threadContext);
  const navigation = useNavigation();

  const onPressIsTitle = () => {
    setIsTitle(!isTitle);
  };

  const onSelectCategory = index => {
    setIsCategory(false);
  };

  const onSave = () => {
    onCreate({
      title,
      content,
      date: new Date(),
      categoryId: '🔥',
      isTitle,
    });
    navigation.goBack();
  };

  useEffect(() => {
    if (isTitle) {
      if (title.length === 0 || content.length === 0) {
        setIsDone(false);
      } else {
        setIsDone(true);
      }
    } else {
      if (content.length === 0) {
        setIsDone(false);
      } else {
        setIsDone(true);
      }
    }
  }, [isTitle, title, content]);

  return (
    <SafeAreaView style={styles.blocK}>
      <KeyboardAvoidingView style={styles.avodingView} behavior={'padding'}>
        <WriteHeader />
        {/*
        TODO: 카테고리 추가하는 그런 느낌의 그걸 만들어야함.
        */}
        {isCategory ? (
          <WriteCategory onSelectCategory={onSelectCategory} />
        ) : (
          <>
            <WriteBody
              title={title}
              isTitle={isTitle}
              onChangeTitle={setTitle}
              content={content}
              onChangeContent={setContent}
            />
            <WriteFooter
              isTitle={isTitle}
              onPressIsTitle={onPressIsTitle}
              isDone={isDone}
              onSave={onSave}
            />
          </>
        )}
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
