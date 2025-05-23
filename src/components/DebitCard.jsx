import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';
import CustomButton from './CustomButton';
import {RNVectorIcons} from '../utils/assets/Icons';
import Strings from '../utils/constants/Strings';
const DebitCard = ({title, subtitle, bgDark}) => {
  return (
    <View
      style={[
        styles.cardContainer,
        bgDark && {backgroundColor: Colors.gray_322e34},
      ]}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        {bgDark && (
          <Ionicons
            name={RNVectorIcons.Ionicons.arrowForward}
            size={16}
            color={Colors.white_fff}
          />
        )}
      </View>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
      <CustomButton
        text={Strings.buttonText.manageCard}
        iconRight={RNVectorIcons.Ionicons.arrowForward}
        borderColor={Colors.green_04bb5f}
        iconColor={Colors.white_fff}
        textColor={Colors.white_fff}
      />
    </View>
  );
};

export default DebitCard;

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
    marginBottom: 50,
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
