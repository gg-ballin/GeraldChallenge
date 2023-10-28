import { Platform, StyleSheet } from 'react-native';
import { DrawerNavigationOptions } from '@react-navigation/drawer';

import { Colors } from '../utils/theme';

export const TAB_STYLES = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    elevation: 19,
  },
});

export const screenOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerActiveBackgroundColor: Colors.activeOverlay,
  drawerInactiveBackgroundColor: Colors.transparent,
  drawerActiveTintColor: Colors.active,
  drawerInactiveTintColor: Colors.inactive,
  drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
  overlayColor: Colors.transparent,
  drawerStyle: {
    backgroundColor: Colors.bg,
    width: '60%',
  },
  sceneContainerStyle: {
    backgroundColor: Colors.bg,
  },
};
