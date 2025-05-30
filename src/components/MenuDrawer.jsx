import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MenuScreen from '../components/MenuScreen';
import MenuOption from '../components/MenuOption';
import ProfileCard from './ProfileCard';
import Strings from '../utils/constants/Strings';
import {IconImages} from '../utils/assets/Icons';

const MenuDrawer = ({user, version}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuScreen
          title={Strings.header.title.menuDrawerScreen}
          subtitle={Strings.header.subtitle.menuDrawerScreen}
          appVersion={version}
          headerItemRight>
          <ProfileCard
            userPhoto={{uri: user.profileImage}}
            userFullName={user.name}
            userNumber={user.mobile}
            userEmail={user.email}
          />
          <MenuOption
            text={Strings.menuOptions.accountLevel}
            textColored={user.accountLevel}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.transactionHistory}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.openNewGenAccounts}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.myAccount}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.goalsAndRewards}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.myApprovals}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.becomeRaastMerchant}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.taxCertificate}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.subscribedServices}
            leftIcon={IconImages.star}
            newBadge
          />
          <MenuOption
            text={Strings.menuOptions.securityPreferences}
            leftIcon={IconImages.star}
            newBadge
          />
          <Text style={styles.sectionHeading}>{Strings.help}</Text>
          <MenuOption
            text={Strings.menuOptions.customerSupport}
            leftIcon={IconImages.star}
            newBadge
          />
          <MenuOption
            text={Strings.menuOptions.feeDetails}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.helpFaqs}
            leftIcon={IconImages.star}
          />
        </MenuScreen>
      </ScrollView>
    </View>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});
