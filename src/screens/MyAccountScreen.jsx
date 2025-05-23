import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MenuScreen from '../components/MenuScreen';
import MenuOption from '../components/MenuOption';
import AccountTypeCard from '../components/AccountTypeCard';
import Colors from '../utils/constants/Colors';
import {Loader} from '../components/Loader';
import data from '../data/data.json';
import Strings from '../utils/constants/Strings';
import {IconImages} from '../utils/assets/Icons';

const MyAccountScreen = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([true]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setUser(data.users[0]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuScreen
          title={Strings.header.title.myAccountScreen}
          subtitle={Strings.header.subtitle.myAccountScreen}>
          <Text style={styles.accountText}>{Strings.account}</Text>

          <AccountTypeCard
            userNumber={user.mobile}
            cardContainerStyle={{marginVertical: 16}}
          />
          <MenuOption
            text={Strings.menuOptions.accountInformation}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.linkTelenorBank}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.linkDebitCard}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.GetTaxCertificate}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.openNewGenAccount}
            leftIcon={IconImages.star}
          />
          <MenuOption
            text={Strings.menuOptions.becomeRaastMerchant}
            leftIcon={IconImages.star}
          />
        </MenuScreen>
      </ScrollView>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.white_fff,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  accountText: {
    fontSize: 16,
  },
});
