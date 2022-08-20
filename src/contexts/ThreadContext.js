import React, {createContext, useEffect, useRef, useState} from 'react';
import threadsStorage from '../storages/threadStorage';

const ThreadContext = createContext();

const defaultThread = {
  id: 1,
  categoryId: '🔥',
  title: '제목',
  content: '어쩌고저쩌고',
  date: '2022-08-20T11:52:42.054Z',
};

export function ThreadContextProvider({children}) {
  const [threads, setThreads] = useState([defaultThread]);
  const initialThreadsRef = useRef(null);

  const onCreate = ({}) => {};
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
