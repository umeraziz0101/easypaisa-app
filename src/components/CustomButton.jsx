import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';

const CustomButton = ({
  buttonContainerStyle,
  borderColor,
  text,
  textColor,
  iconColor,
  iconLeft,
  iconLeftSize,
  iconImageLeft,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {borderColor: borderColor}, buttonContainerStyle]}>
      <View style={styles.buttonTextContainer}>
        {iconLeft && (
          <Ionicons name={'pencil'} size={iconLeft} color={iconColor} />
        )}
        <Text
          style={[
            styles.buttonText,
            {color: textColor},
            iconLeft && styles.buttonTextLeft,
          ]}>
          {text}
        </Text>
        {!iconLeft && (
          <Ionicons name={'arrow-forward'} size={16} color={iconColor} />
        )}
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
    flex: 1,
  },
  buttonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 8,
  },
  buttonTextLeft: {
    fontSize: 10,

    marginLeft: 4,
  },
  iconImageContainer: {backgroundColor: Colors.white_fff},
  iconImage: {width: 20, height: 20},
});
