import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {theme} from './theme';
import {ThemeProvider} from 'styled-components';
import {ThreadContextProvider} from './contexts/ThreadContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ThreadContextProvider>
          <RootStack />
        </ThreadContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  text: {
    fontFamily: 'MinSans-Bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
