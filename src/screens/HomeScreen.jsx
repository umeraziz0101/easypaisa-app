import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';
import QuickActionItem from '../components/QuickActionItem';
import AccountCard from '../components/AccountCard';
import CustomCarousel from '../components/CustomCarousel';
import CustomSection from '../components/CustomSection';
import DebitCard from '../components/DebitCard';
import CustomCard from '../components/CustomCard';
import PromotionScroll from '../components/PromotionScroll';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={require('..//assets/images/profile.png')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('..//assets/images/profile.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              size={24}
              color={Colors.black_111}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={Colors.black_111}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* Account Card */}
        <AccountCard />
        <View style={styles.bodyContainer}>
          {/* Quick Actions */}
          <CustomSection>
            <View style={styles.quickActionContainer}>
              <View style={styles.quickActionRow}>
                <QuickActionItem
                  icon={'paper-plane-outline'}
                  title={'Send Money'}
                />
                <QuickActionItem
                  icon={'paper-plane-outline'}
                  title={'Bill Payment'}
                />
                <QuickActionItem
                  icon={'paper-plane-outline'}
                  title={'Mobile Packages'}
                />
              </View>
            </View>
          </CustomSection>
          {/* More with easypaisa */}
          <CustomSection title={'More with easypaisa'}>
            <CustomCarousel />
          </CustomSection>
          {/* Debit Card */}
          <CustomSection title={'Get your easypaisa Debit Card'}>
            <View style={styles.miniAppSectionContainer}>
              <DebitCard
                title={'Online Card'}
                subtitle={'Only for Online Payments in Pakistan'}
              />
              <DebitCard
                title={'Plastic Card'}
                subtitle={'Use at any ATM or Shop in Pakistan'}
                bgDark
              />
            </View>
          </CustomSection>
          {/* Mini Apps */}
          <CustomSection title={'Discover miniApps on easypaisa'}>
            <CustomCarousel />
          </CustomSection>
          {/* Promotion */}
          <CustomSection title={"Tap to see what's New"}>
            <PromotionScroll />
          </CustomSection>
          {/* Schedule Transaction */}
          <CustomSection title={'Schedule Your Transactions'}>
            <CustomCard
              title={'Set payments in advance'}
              subtitle={'Now Setup Mobile Packages and Easyload in advance.'}
              buttonText={'Schedule Payments'}
              icon={require('../assets/images/1.png')}
            />
          </CustomSection>
          {/* Help */}
          <CustomSection childrenStyle={{marginVertical: 0}}>
            <CustomCard
              title={'Help & Customer Support'}
              subtitle={
                'Register a complaint or get quick help on queries related to easypaisa'
              }
              buttonText={'Get Help'}
              icon={require('../assets/images/1.png')}
            />
          </CustomSection>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: Colors.white_fff,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {width: 36, height: 36, borderRadius: 18, marginRight: 8},
  logoContainer: {flexDirection: 'row', justifyContent: 'center'},
  logo: {
    height: 24,
    width: 24,
    margin: 4,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    marginLeft: 16,
  },

  bodyContainer: {
    paddingHorizontal: 16,
  },

  // Quick Action
  quickActionContainer: {
    paddingHorizontal: 16,
  },
  quickActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Mini App Section
  miniAppSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
