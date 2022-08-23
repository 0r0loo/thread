import React, {createContext, useEffect, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';
import threadsStorage from '../storages/threadStorage';

const ThreadContext = createContext();

const defaultThread = {
  id: 1,
  categoryId: '🔥',
  isTitle: true,
  title: '제목',
  content:
    "오늘날에도 대부분의 사람들은 땅 위에 살고 있기 때문에 '공간'으로서의 '땅'의 의미가 다소 확장되었다. \n" +
    '이를 볼 수 있는 예가 EVE 온라인인데, 우주를 다루기에 물질적인 의미의 \'땅\'은 없는데도 불구하고 "도딕시는 갈란테 땅, 지타는 칼다리 땅"이란 말을 쓰고 있다.',
  date: '2022-08-20T11:52:42.054Z',
};

export function ThreadContextProvider({children}) {
  const [threads, setThreads] = useState([]);
  const initialThreadsRef = useRef(null);

  const onCreate = ({title, content, date, isTitle, categoryId}) => {
    const thread = {
      id: uuidv4(),
      categoryId,
      isTitle,
      title,
      content,
      date,
    };
    setThreads([thread, ...threads]);
  };
  const onModify = () => {};
  const onRemove = () => {};

  useEffect(() => {
    (async () => {
      const savedThreads = await threadsStorage.get();
      if (savedThreads) {
        initialThreadsRef.current = savedThreads;
        setThreads(savedThreads);
      }
    })();
  }, []);

  useEffect(() => {
    if (threads === initialThreadsRef.current) {
      return;
    }
    threadsStorage.set(threads);
  }, [threads]);

  return (
    <ThreadContext.Provider value={{threads, onCreate, onModify, onRemove}}>
      {children}
    </ThreadContext.Provider>
  );
}

export default ThreadContext;
