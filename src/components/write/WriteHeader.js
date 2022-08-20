import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconButton from '../common/IconButton';
import {images} from '../../images';
import styled from 'styled-components/native';

function WriteHeader() {
  const navigation = useNavigation();
  const onClose = () => {
    console.log('글쓰기 헤더 X 버튼');
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      {/*<Pressable*/}
      {/*  onPress={onClose}*/}
      {/*  style={{*/}
      {/*    justifyContent: 'center',*/}
      {/*    alignItems: 'center',*/}
      {/*  }}>*/}
      {/*  /!* TODO: X Icon으로 교체해야함 *!/*/}
      {/*  <Text>X</Text>*/}
      {/*</Pressable>*/}
      <IconButton
        type={images.close}
        tintColor={'#31302B'}
        onPressOut={onClose}
      />
      <View style={styles.center}>
        <HeaderText>글 쓰기</HeaderText>
      </View>
    </View>
  );
}

const HeaderText = styled.Text`
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${({theme}) => theme.ui01};
`;

const styles = StyleSheet.create({
  block: {
    height: 56,
    // backgroundColor: 'red',
    padding: 16,
    flexDirection: 'row',
  },
  center: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'MinSans-Regular',
    fontSize: 18,
  },
});

export default WriteHeader;
