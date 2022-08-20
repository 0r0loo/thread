import React, {useContext} from 'react';
import styled from 'styled-components/native';
import MainHeader from '../components/main/MainHeader';
import Empty from '../components/main/Empty';
import FloatingWriteButton from '../components/common/FloatingWriteButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import Thread from '../components/main/Thread';
import {FlatList} from 'react-native';
import ThreadContext from '../contexts/ThreadContext';
import Threads from '../components/main/Threads';

function MainScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <Container>
        <MainHeader />
        <Threads />
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
