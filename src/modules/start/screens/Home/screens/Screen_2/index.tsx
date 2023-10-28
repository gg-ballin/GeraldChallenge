import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Header from '../../../../../../components/Header';
import { Colors } from '../../../../../../utils/theme';

const Screen_1 = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.wrapper}>
        <Header title="SCREEN 2" goBack />
      </View>
    </>
  );
};

export default Screen_1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    flex: 1,
    padding: 16,
    paddingVertical: 20,
  },
});
