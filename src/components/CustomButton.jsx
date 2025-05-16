import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomButton = ({
  buttonContainerStyle,
  borderColor,
  text,
  textColor,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {borderColor: borderColor}, buttonContainerStyle]}>
      <View style={styles.buttonTextContainer}>
        <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
        <Ionicons name={'arrow-forward'} size={16} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 24,
    borderWidth: 2,
  },
  buttonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 8,
  },
});
