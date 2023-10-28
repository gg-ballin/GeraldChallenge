import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../../modules/start/screens/Home/screens/HomeScreen';

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
    <Stack.Screen options={{ ...options }} name="Start" component={Start} />
  </Stack.Navigator>
);

export default StartStack;
