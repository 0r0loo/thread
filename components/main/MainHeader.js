import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import TransparentCircleButton from '../common/TransparentCircleButton';
import styled from 'styled-components/native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function MainHeader() {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={{height: top, backgroundColor: '#f7f6f2'}} />
      <Container>
        <View>
          <Pressable>
            <DateText>{format(new Date(), 'PPP', {locale: ko})}</DateText>
          </Pressable>
        </View>
        <Buttons>
          <TransparentCircleButton hasMarginRight={20} />
          <TransparentCircleButton />
        </Buttons>
      </Container>
    </>
  );
}

const Container = styled.View`
  height: 64px;
  background: #f7f6f2;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 20px;
`;

const DateText = styled.Text`
  font-family: 'MinSans-Bold';
  font-weight: 700;
  font-size: 21px;
  line-height: 29px;
`;

const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default MainHeader;
