import React from 'react';
import styled from 'styled-components/native';
import MainHeader from '../components/main/MainHeader';
import Empty from '../components/main/Empty';
import FloatingWriteButton from '../components/common/FloatingWriteButton';
import {SafeAreaView} from 'react-native-safe-area-context';

function MainScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Container>
        <MainHeader />
        <Empty />
        <FloatingWriteButton />
      </Container>
    </SafeAreaView>
  );
}
const Container = styled.View`
  background: #f7f6f2;
  flex: 1;
`;

export default MainScreen;
