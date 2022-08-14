import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {theme} from './theme';
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack />
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
