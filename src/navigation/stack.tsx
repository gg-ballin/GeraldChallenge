import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../modules/start/screens';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: 48,
  },
};

const StartStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ ...options, title: 'Your Cart' }}
      name="Start"
      component={Start}
    />
    <Stack.Screen options={options} name="Orders" component={Start} />
  </Stack.Navigator>
);

export default StartStack;
