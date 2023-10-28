import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { styles } from '../styles';
import { StyleSheet, Text, View } from 'react-native';

const DrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView {...props}>
    <View style={drawerStyles.containerTitle}>
      <Text style={drawerStyles.title}>Beka</Text>
    </View>
    <DrawerItemList {...props} {...DrawerItemListProps} />
    <DrawerItem onPress={() => {}} label="Your Cart" {...DrawerItemProps} />
    <DrawerItem onPress={() => {}} label="Favourites" {...DrawerItemProps} />
    <DrawerItem onPress={() => {}} label="Your Orders" {...DrawerItemProps} />
    <View style={drawerStyles.drawerSpacing} />
    <DrawerItem onPress={() => {}} label="Sign Out" {...DrawerItemProps} />
  </DrawerContentScrollView>
);
const drawerStyles = StyleSheet.create({
  containerTitle: {
    width: '50%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-Regular',
    fontWeight: 'bold',
  },
  drawerSpacing: {
    height: 1,
    width: 150,
    margin: 20,
  },
});
const DrawerItemCommonProps = {
  labelStyle: styles.drawerItemLabel,
  activeBackgroundColor: 'rgba(252, 128, 116, 0.2)',
  activeTintColor: '#FC8074',
  inactiveTintColor: 'white',
  inactiveBackgroundColor: 'transparent',
};
const DrawerItemListProps = {
  ...DrawerItemCommonProps,
  itemStyle: styles.drawerItem,
};
const DrawerItemProps = {
  ...DrawerItemCommonProps,
  style: styles.drawerItem,
};
export default DrawerContent;
