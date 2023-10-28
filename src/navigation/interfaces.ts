import {DrawerScreenProps} from '@react-navigation/drawer';
import {CartScreenParams} from '../modules/cart/interfaces';
import {StackScreenProps} from '@react-navigation/stack';

export type DrawerScreenParams = {
  StartStack: undefined;
  FavouritesStack: undefined;
  CartStack: undefined;
  OrdersStack: undefined;
};

export type StackScreenParams = {
  Start: undefined;
  StartContact: undefined;
  Favourites: undefined;
  FavouritesContact: undefined;
  Cart: undefined;
  CartContact: undefined;
  Orders: undefined;
  OrdersContact: undefined;
};
type ScreensParams = CartScreenParams;

export type RootScreenParams = DrawerScreenParams &
  StackScreenParams &
  ScreensParams;

export type DrawerScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = DrawerScreenProps<RootScreenParams, RouteName>;

export type StackScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = StackScreenProps<RootScreenParams, RouteName>;
