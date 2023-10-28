import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DrawerButton from './DrawerButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import ArrowLeft from './ArrowLeft';

type Props = {
  title: string;
  goBack?: boolean;
};

const Header = ({ title, goBack }: Props) => {
  const navigation = useNavigation();

  if (goBack) {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <DrawerButton
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    bottom: 4,
    left: 15,
    color: 'grey',
  },
});

export default Header;
