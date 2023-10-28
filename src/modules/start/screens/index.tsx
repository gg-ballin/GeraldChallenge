import React from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from '../../../components/Header';
import Button from '../components/Button';

const Start: React.FC = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.container}>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    padding: 16,
    paddingVertical: 20,
    marginTop: 20,
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

export default Start;
