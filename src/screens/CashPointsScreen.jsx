import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import Colors from '../utils/constants/Colors';
import Test from '../components/Test';

const CashPointsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader title={'Cash Deposit'} />
      <Test />
    </SafeAreaView>
  );
};

export default CashPointsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue_007aff,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
