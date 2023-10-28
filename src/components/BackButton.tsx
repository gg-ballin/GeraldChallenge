import React, { useCallback } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { useNavigation } from '../navigation/hooks';

const BackButton = ({ onPress, ...props }: TouchableOpacityProps) => {
  const navigation = useNavigation();

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      if (onPress) {
        onPress(event);
        return;
      }

      navigation.goBack();
    },
    [navigation, onPress],
  );
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      {props.children}
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

export default BackButton;
