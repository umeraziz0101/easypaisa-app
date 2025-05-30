import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import CustomHeader from '../components/CustomHeader';
import Strings from '../utils/constants/Strings';
import Colors from '../utils/constants/Colors';

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const CameraScreen = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <CustomHeader title={Strings.header.title.cameraScreen} />
        <View>
          <Text>{Strings.permissionDenied}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (device == null) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <CustomHeader title={Strings.header.title.cameraScreen} />
        <View>
          <Text>{Strings.noDeviceFound}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader title={Strings.header.title.cameraScreen} />
      <Camera style={styles.preview} device={device} isActive={true} />
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white_fff,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
