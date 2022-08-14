import React, {createContext, useEffect, useRef, useState} from 'react';
import threadsStorage from '../storages/threadStorage';

const ThreadContext = createContext();

export function ThreadContextProvider({children}) {
  const [threads, setThreads] = useState([]);
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
