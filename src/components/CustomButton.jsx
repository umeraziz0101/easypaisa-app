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
  iconLeftSize = 16,
  iconImageLeft,
  iconRight,
  iconRightSize = 16,
  buttonTextLeftStyle,
  buttonTextContainerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {borderColor: borderColor}, buttonContainerStyle]}>
      <View
        style={[
          styles.buttonTextContainer,
          iconImageLeft && {justifyContent: 'flex-start'},
          buttonTextContainerStyle,
        ]}>
        {iconImageLeft ? (
          <View style={styles.iconImageContainer}>
            <Image source={iconImageLeft} style={styles.iconImage} />
          </View>
        ) : iconLeft ? (
          <Ionicons name={iconLeft} size={iconLeftSize} color={iconColor} />
        ) : null}

        <Text
          style={[
            styles.buttonText,
            {color: textColor},
            (iconLeft || iconImageLeft) && styles.buttonTextLeft,
            buttonTextLeftStyle,
          ]}>
          {text}
        </Text>

        {iconRight && (
          <Ionicons name={iconRight} size={iconRightSize} color={iconColor} />
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
  buttonTextLeft: {
    fontSize: 12,
    marginLeft: 4,
  },
  iconImageContainer: {
    backgroundColor: Colors.white_fff,
    borderRadius: 20,
    padding: 4,
    marginRight: 8,
  },
  iconImage: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});
