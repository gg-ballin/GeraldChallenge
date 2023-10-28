import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
  onPress: () => void;
};

const DrawerButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bar} />
      <View style={styles.bar} />
      <View style={styles.bar} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: 25,
    height: 3,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginBottom: 5,
  },
});

export default DrawerButton;
