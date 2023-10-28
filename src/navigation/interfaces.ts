import { DrawerScreenProps } from '@react-navigation/drawer';

import { StackScreenProps } from '@react-navigation/stack';
import { StartScreenParams } from '../modules/start/screens/Home/screens/interfaces';

export type DrawerScreenParams = {
  StartStack: undefined;
};

export type StackScreenParams = {
  Start: undefined;
  StartContact: undefined;
};

type ScreensParams = StartScreenParams;

export type RootScreenParams = DrawerScreenParams &
  StackScreenParams &
  ScreensParams;

export type DrawerScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = DrawerScreenProps<RootScreenParams, RouteName>;

export type StackScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = StackScreenProps<RootScreenParams, RouteName>;
