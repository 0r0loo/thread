import React from 'react';
import styled from 'styled-components/native';
import MainHeader from '../components/main/MainHeader';
import {Text} from 'react-native';
import Empty from '../components/main/Empty';

function MainScreen() {
  return (
    <Container>
      <MainHeader />
      <Empty />
    </Container>
  );
}
const Container = styled.View`
  background: #f7f6f2;
  flex: 1;
`;

export default MainScreen;
