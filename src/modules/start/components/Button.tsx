import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
};

const Button = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
