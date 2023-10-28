import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Header from '../../../../components/Header';
import { Colors } from '../../../../utils/theme';

const StartContact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header title="START CONTACT" />
      </View>
    </SafeAreaView>
  );
};

export default StartContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    padding: 16,
    paddingVertical: 20,
  },
});
