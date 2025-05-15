import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';
const CustomCard = ({title, subTitle, bgDark}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        bgDark && {backgroundColor: Colors.gray_322e34},
      ]}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        {bgDark && (
          <Ionicons name={'arrow-forward'} size={16} color={Colors.white_fff} />
        )}
      </View>
      <Text style={styles.cardSubtitle}>{subTitle}</Text>
      <TouchableOpacity style={styles.cardButton}>
        <View style={styles.cardButtonTextContainer}>
          <Text style={styles.cardButtonText}>Manage card</Text>
          <Ionicons name={'arrow-forward'} size={16} color={Colors.white_fff} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.green_1c6f53,
    borderRadius: 12,
    width: 170,
    padding: 18,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: Colors.white_fff,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: Colors.yellow_e4efa5,
    fontSize: 11,
    marginTop: 10,
  },
  cardButton: {
    marginTop: 50,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.green_04bb5f,
  },
  cardButtonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {
    color: Colors.white_fff,
    fontSize: 12,
    fontWeight: '500',
    marginRight: 4,
  },
});
