import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { DrawerScreenComponent } from '../../../../../../navigation/interfaces';

import Header from '../../../../../../components/Header';
import Button from '../../components/Button';

const Start = ({ navigation }: DrawerScreenComponent) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.wrapper}>
        <Header title="START" />
        <View style={styles.content}>
          <Button
            onPress={() => navigation.navigate('Screen_1')}
            title="Screen 1"
          />
          <Button
            onPress={() => navigation.navigate('Screen_2')}
            title="Screen 2"
          />
        </View>
      </View>
    </>
  );
};

export default Start;

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
  content: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
});
