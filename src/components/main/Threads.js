import React, {useContext} from 'react';
import Thread from './Thread';
import {FlatList} from 'react-native';
import ThreadContext from '../../contexts/ThreadContext';
import Empty from './Empty';
import styled from 'styled-components/native';

function Threads() {
  const {threads} = useContext(ThreadContext);
  return (
    <Container>
      <FlatList
        data={threads}
        keyExtractor={thread => thread.id}
        renderItem={({item}) => <Thread thread={item} />}
        ListEmptyComponent={<Empty />}
      />
      {/*{threads.length === 0 ? (*/}
      {/*  <Empty />*/}
      {/*) : (*/}
      {/*  <FlatList*/}
      {/*    data={threads}*/}
      {/*    keyExtractor={thread => thread.id}*/}
      {/*    renderItem={({item}) => <Thread thread={item} />}*/}
      {/*  />*/}
      {/*)}*/}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: white;
  padding-top: 32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default Threads;
