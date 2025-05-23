import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/constants/Colors';
import CustomButton from './CustomButton';
import {RNVectorIcons} from '../utils/assets/Icons';

const CustomCard = ({icon, title, subtitle, buttonText}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.itemRow}>
        <View style={styles.icon}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
            {subtitle}
          </Text>
          <CustomButton
            text={buttonText}
            iconRight={RNVectorIcons.Ionicons.arrowForward}
            borderColor={Colors.black_111}
            iconColor={Colors.green_04bb5f}
            textColor={Colors.black_111}
            buttonContainerStyle={{alignSelf: 'flex-start', borderWidth: 1}}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white_fff,
    borderRadius: 12,
    padding: 18,
  },
  itemRow: {flexDirection: 'row'},

  icon: {
    width: 50,
    height: 50,
  },

  titleContainer: {
    marginLeft: 16,
    marginRight: 70,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  subtitle: {fontSize: 14, marginBottom: 24},
});
