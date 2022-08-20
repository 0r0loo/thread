import React, {useContext} from 'react';
import Thread from './Thread';
import {FlatList} from 'react-native';
import ThreadContext from '../../contexts/ThreadContext';

function Threads() {
  const {threads} = useContext(ThreadContext);
  {
    /*<Empty />*/
  }
  return (
    <FlatList
      data={threads}
      keyExtractor={thread => thread.id}
      renderItem={({item}) => <Thread thread={item} />}
    />
  );
}

export default Threads;
