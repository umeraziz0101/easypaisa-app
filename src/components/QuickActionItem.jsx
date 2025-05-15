import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';

const QuickActionItem = ({icon, title}) => {
  return (
    <TouchableOpacity style={styles.quickActionItem}>
      <View style={styles.quickActionIconContainer}>
        <Ionicons name={icon} size={26} color={Colors.black_111} />
      </View>
      <Text style={styles.quickActionItemText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default QuickActionItem;

const styles = StyleSheet.create({
  quickActionItem: {
    width: 100,
    height: 100,
    alignItems: 'center',
    backgroundColor: Colors.white_fff,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  quickActionIconContainer: {
    marginBottom: 8,
  },
  quickActionItemText: {
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center',
    color: Colors.black_111,
  },
});
