import React from 'react';
import { StyleSheet, View } from 'react-native';

const ArrowLeft = () => {
  return <View style={[styles.triangle, styles.left]} />;
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'grey',
  },
  left: {
    transform: [{ rotate: '-90deg' }],
  },
});

export default ArrowLeft;
