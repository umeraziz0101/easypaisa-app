import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Strings from '../utils/constants/Strings';
import {IconImages, RNVectorIcons} from '../utils/assets/Icons';

const AccountTypeCard = ({userNumber, cardContainerStyle}) => {
  return (
    <View style={[styles.cardContainer, cardContainerStyle]}>
      <View style={styles.itemRow}>
        <Image source={IconImages.star} style={styles.leftIcon} />
        <View style={styles.infoContainer}>
          <Text style={styles.titleStyle}>{Strings.accountLabel}</Text>
          <Text style={styles.numberStyle}>{userNumber}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons
            name={RNVectorIcons.Ionicons.chevronDownSharp}
            size={18}
            color={Colors.gray_322e34}
          />
        </View>
      </View>
    </View>
  );
};

export default AccountTypeCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    borderColor: Colors.gray_717171,
    borderRadius: 8,
    borderWidth: 1,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {width: 35, height: 35},

  infoContainer: {
    marginLeft: 16,
  },
  iconContainer: {
    marginLeft: 'auto',
  },
  titleStyle: {fontSize: 12, fontWeight: '500'},
  numberStyle: {fontSize: 12, marginTop: 2, color: Colors.gray_717171},
  icon: {
    width: 50,
    height: 50,
  },
});
