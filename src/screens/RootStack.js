import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Main'}
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Write'}
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
