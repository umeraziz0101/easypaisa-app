import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';
import {RNVectorIcons} from '../utils/assets/Icons';
import Strings from '../utils/constants/Strings';

const AccountCard = ({balance}) => {
  const userAmount = balance;
  const [showPassword, setShowPassword] = useState(false);
  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.accountCard}>
      <View style={styles.accountInfo}>
        <View style={styles.accountLabelContainer}>
          <Ionicons
            name={RNVectorIcons.Ionicons.walletOutline}
            size={18}
            color={Colors.white_fff}
          />
          <Text style={styles.accountLabel}>{Strings.accountLabel}</Text>
        </View>
        <View style={styles.rewardsContainer}>
          <Text style={styles.rewardText}>{Strings.rewardText}</Text>
          <Ionicons
            name={RNVectorIcons.Ionicons.ribbonOutline}
            size={18}
            color={Colors.yellow_fed600}
          />
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceLabel}>{Strings.balanceLabel}</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceStars}>
              {showPassword
                ? Strings.showBalanceText(userAmount)
                : Strings.hiddenBalanceText}
            </Text>
            <TouchableOpacity onPress={onPressShowPassword}>
              <Ionicons
                name={
                  showPassword
                    ? RNVectorIcons.Ionicons.eyeOffOutline
                    : RNVectorIcons.Ionicons.eyeOutline
                }
                size={20}
                color={Colors.white_fff}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.tapText}>
            {showPassword ? Strings.tapToHideBalance : Strings.tapToShowBalance}
          </Text>
        </View>
        <View style={styles.addCashButtonContainer}>
          <TouchableOpacity style={styles.addCashButton}>
            <Text style={styles.addCashButtonText}>
              {Strings.buttonText.addCash}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  accountCard: {
    backgroundColor: Colors.green_1c6f53,
    borderRadius: 12,

    marginTop: 16,
    padding: 18,
  },
  accountInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  accountLabelContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: Colors.green_2e8064,
    borderRadius: 4,
  },

  accountLabel: {
    color: Colors.white_fff,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
  rewardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  rewardText: {
    color: Colors.white_fff,
    fontSize: 14,
    fontWeight: '500',
    marginRight: 8,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  balanceLabel: {
    color: Colors.white_fff,
    fontSize: 12,
    marginBottom: 4,
  },
  balanceRow: {flexDirection: 'row', alignItems: 'center'},
  balanceStars: {
    color: Colors.white_fff,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
  },
  tapText: {color: Colors.white_fff, fontSize: 12, marginTop: 4},
  addCashButtonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  addCashButton: {
    backgroundColor: Colors.green_04bb5f,
    paddingVertical: 4,
    paddingHorizontal: 28,
    borderRadius: 24,
  },
  addCashButtonText: {color: Colors.white_fff, fontSize: 12},
});
