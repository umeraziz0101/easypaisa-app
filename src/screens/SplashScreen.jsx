import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../utils/constants/Colors';
import {useNavigation} from '@react-navigation/native';
import Routes from '../utils/constants/Routes';
import Images from '../utils/assets/Images';
import Constants from '../utils/constants/Constants';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Routes.mainTabs.name);
    }, Constants.milliseconds);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      <StatusBar barStyle={'dark-content'} />

      <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_007aff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
