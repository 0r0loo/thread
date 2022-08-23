import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import MainHeader from '../components/main/MainHeader';
import Empty from '../components/main/Empty';
import FloatingWriteButton from '../components/common/FloatingWriteButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import Thread from '../components/main/Thread';
import {FlatList} from 'react-native';
import ThreadContext from '../contexts/ThreadContext';
import Threads from '../components/main/Threads';
import CalendarScreen from './CalendarScreen';

function MainScreen() {
  // LIST, CALENDAR
  const [mainType, setMainType] = useState('LIST');

  const onPressViewType = () => {
    setMainType(mainType === 'LIST' ? 'CALENDAR' : 'LIST');
  };

  return (
    <SafeAreaViewStyle edges={['bottom']}>
      <Container>
        <MainHeader mainType={mainType} onPressViewType={onPressViewType} />
        {mainType === 'LIST' ? <Threads /> : <CalendarScreen />}
        <FloatingWriteButton />
      </Container>
    </SafeAreaViewStyle>
  );
}

const SafeAreaViewStyle = styled(SafeAreaView)`
  flex: 1;
`;

const Container = styled.View`
  background: #f7f6f2;
  flex: 1;
`;

export default MainScreen;
