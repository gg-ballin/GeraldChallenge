import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  navigateTo: string;
}

const Button = ({ title, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text>{title}</Text>
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
