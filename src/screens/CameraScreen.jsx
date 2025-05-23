// import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
// import React, { useEffect, useState } from 'react';
// import CustomHeader from '../components/CustomHeader';
// import Strings from '../utils/constants/Strings';
// import {RNCamera} from 'react-native-camera';
// import Colors from '../utils/constants/Colors';
// import { Camera } from 'react-native-vision-camera';

// const CameraScreen = () => {
//       const [hasPermission, setHasPermission] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const status = await Camera.requestCameraPermission();
//       setHasPermission(status === 'authorized');
//     })();
//   }, []);

//   if (!hasPermission) {
//     return <Text>No camera permission</Text>;
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <CustomHeader title={Strings.header.title.cameraScreen} />
//       {/* show camera here with remaining full screen*/}
//       <RNCamera
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         captureAudio={false}
//       />
//     </SafeAreaView>
//   );
// };

// export default CameraScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.white_fff,
//     flex: 1,
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
// });

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import CustomHeader from '../components/CustomHeader';
import Strings from '../utils/constants/Strings';
import Colors from '../utils/constants/Colors';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  if (!device || !hasPermission) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <CustomHeader title={Strings.header.title.cameraScreen} />
        <Text style={styles.permissionText}>
          Camera not available or permission denied.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader title={Strings.header.title.cameraScreen} />
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
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
  permissionText: {
    textAlign: 'center',
    marginTop: 20,
    color: Colors.black_111,
  },
});
