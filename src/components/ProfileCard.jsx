import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/constants/Colors';
import CustomButton from './CustomButton';
import {RNVectorIcons} from '../utils/assets/Icons';
import Strings from '../utils/constants/Strings';

const ProfileCard = ({userPhoto, userFullName, userNumber, userEmail}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.itemRow}>
        <View style={styles.imageContainer}>
          <Image source={userPhoto} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{userFullName}</Text>
            <CustomButton
              iconLeft={RNVectorIcons.Ionicons.pencil}
              iconLeftSize={10}
              buttonTextLeftStyle={styles.buttonText}
              iconColor={Colors.green_04bb5f}
              borderColor={Colors.green_04bb5f}
              text={Strings.buttonText.edit}
              buttonContainerStyle={styles.button}
            />
          </View>
          <Text style={styles.number}>{userNumber}</Text>
          <Text style={styles.email}>{userEmail}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.green_1c6f53,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 30,
  },
  itemRow: {flexDirection: 'row'},
  infoContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {marginRight: 16},

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  titleContainer: {
    marginLeft: 16,
    marginRight: 70,
  },

  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    color: Colors.white_fff,
  },
  number: {fontSize: 14, color: Colors.white_fff},
  email: {fontSize: 12, color: Colors.white_fff},
  button: {
    backgroundColor: Colors.white_fff,
    paddingVertical: 1,
    paddingHorizontal: 12,
    height: 20,
    flex: 0,
  },
  buttonText: {
    fontSize: 10,
  },
});
