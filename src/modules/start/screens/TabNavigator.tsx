import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartStack from './Home/screens/Stack';
import StartContact from './Contact';
import { tabBarOptions } from '../../../utils/constants';

export type StartParamList = {
  StartStack: undefined;
  StartContact: undefined;
};

const Tab = createBottomTabNavigator<StartParamList>();

const StartTab = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        options={{ title: 'Start' }}
        name="StartStack"
        component={StartStack}
      />
      <Tab.Screen
        options={{ title: 'Contact' }}
        name="StartContact"
        component={StartContact}
      />
    </Tab.Navigator>
  );
};

export default StartTab;
