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
import AccountTypeCard from '../components/AccountTypeCard';
import Colors from '../utils/constants/Colors';

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuScreen
          title={'Account Settings'}
          subtitle={'Account info, Settings & More'}>
          <Text style={styles.accountText}>ACCOUNT</Text>

          <AccountTypeCard
            userNumber={'03317880101'}
            cardContainerStyle={{marginVertical: 16}}
          />
          <MenuOption
            text={'Account Information'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Link Telenor Microfinance Bank'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Link Debit Card'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Get Your Tax Certificate'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Open NewGenAccount'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Become a RAAST Merchant'}
            leftIcon={require('../assets/icons/star.png')}
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
