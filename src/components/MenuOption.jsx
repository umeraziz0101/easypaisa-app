import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MenuOption = ({leftIcon, text, textColored, newBadge}) => {
  return (
    <View style={styles.container}>
      <Image source={leftIcon} style={styles.leftIconStyle} />
      <View style={styles.middleGroup}>
        <Text style={styles.textStyle}>
          {text} <Text style={styles.textColoredStyle}>{textColored}</Text>
        </Text>
        {newBadge && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>NEW</Text>
          </View>
        )}
      </View>
      <Ionicons
        name={'chevron-forward'}
        size={22}
        color={Colors.gray_cbcbcb}
        style={styles.rightIconStyle}
      />
    </View>
  );
};

export default MenuOption;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconStyle: {
    height: 20,
    width: 20,
    marginRight: 16,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  textColoredStyle: {
    color: Colors.green_04bb5f,
    fontWeight: '800',
  },
  middleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  badgeContainer: {
    backgroundColor: Colors.yellow_fed600,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginLeft: 'auto',
    marginRight: 12,
  },
  badgeText: {
    fontSize: 14,
  },
  rightIconStyle: {},
});
