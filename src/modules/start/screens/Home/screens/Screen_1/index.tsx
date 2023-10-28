import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Header from '../../../../../../components/Header';

const Screen_1 = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.wrapper}>
        <Header title="SCREEN 1" goBack />
      </View>
    </>
  );
};

export default Screen_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    padding: 16,
    paddingVertical: 20,
  },
});
