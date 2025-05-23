import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';

const CameraTabButton = ({onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.button}>
      <Ionicons name="camera" size={28} color={Colors.white_fff} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.green_04bb5f,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default CameraTabButton;
