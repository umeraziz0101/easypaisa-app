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

const MenuDrawer = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuScreen
          title={'My Account'}
          subtitle={'Profile, Settings & More'}
          headerItemRight>
          <ProfileCard
            userPhoto={require('../assets/images/promotion2.png')}
            userFullName={'UMER AZIZ'}
            userNumber={'03317880101'}
            userEmail={'umeraziz0101@gmail.com'}
          />
          <MenuOption
            text={'Account Level'}
            textColored={'Asaan Digital Account'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Transaction History'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Open NewGen Account'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'My Account'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Goals & Rewards'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'My Approvals'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Become a RAAST Merchant'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Tax Certificate'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Subscribed Services'}
            leftIcon={require('../assets/icons/star.png')}
            newBadge
          />
          <MenuOption
            text={'Secureity Prefrences'}
            leftIcon={require('../assets/icons/star.png')}
            newBadge
          />
          <Text style={styles.sectionHeading}>Help</Text>
          <MenuOption
            text={'Customer Support'}
            leftIcon={require('../assets/icons/star.png')}
            newBadge
          />
          <MenuOption
            text={'Fee Details'}
            leftIcon={require('../assets/icons/star.png')}
          />
          <MenuOption
            text={'Help & FAQs'}
            leftIcon={require('../assets/icons/star.png')}
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
