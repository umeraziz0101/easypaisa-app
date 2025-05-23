import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../components/CustomHeader';
import Colors from '../utils/constants/Colors';
import CustomAccordion from '../components/CustomAccordion';
import Strings from '../utils/constants/Strings';

const CashPointsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader title={Strings.header.title.cashPointsScreen} />
      <CustomAccordion />
    </SafeAreaView>
  );
};

export default CashPointsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white_fff,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
