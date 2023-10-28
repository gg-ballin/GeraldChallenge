import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './HomeScreen';
import Screen_1 from './Screen_1';
import Screen_2 from './Screen_2';

export type StartParamList = {
  Start: undefined;
  Screen_1: undefined;
  Screen_2: undefined;
};

const Stack = createStackNavigator<StartParamList>();

const StartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Screen_1" component={Screen_1} />
      <Stack.Screen name="Screen_2" component={Screen_2} />
    </Stack.Navigator>
  );
};

export default StartStack;
