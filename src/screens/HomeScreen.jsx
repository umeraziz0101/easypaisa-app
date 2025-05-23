import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';
import QuickActionItem from '../components/QuickActionItem';
import AccountCard from '../components/AccountCard';
import CustomCarousel from '../components/CustomCarousel';
import CustomSection from '../components/CustomSection';
import DebitCard from '../components/DebitCard';
import CustomCard from '../components/CustomCard';
import PromotionScroll from '../components/PromotionScroll';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Loader} from '../components/Loader';
import data from '../data/data.json';
import Images from '../utils/assets/Images';
import {IconImages, RNVectorIcons} from '../utils/assets/Icons';
import Strings from '../utils/constants/Strings';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setUser(data.users[0]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const onPressMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      {/* Loader */}
      <Loader visible={loading} />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={onPressMenu}>
            <Image
              source={{uri: user.profileImage}}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons
              name={RNVectorIcons.Ionicons.searchOutline}
              size={24}
              color={Colors.black_111}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons
              name={RNVectorIcons.Ionicons.notificationsOutline}
              size={24}
              color={Colors.black_111}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Account Card */}
        <View style={styles.accountCardContainer}>
          <AccountCard balance={user.balance} />
        </View>
        <View style={styles.bodyContainer}>
          {/* Quick Actions */}
          <CustomSection>
            <View style={styles.quickActionContainer}>
              <View style={styles.quickActionRow}>
                <QuickActionItem
                  icon={RNVectorIcons.Ionicons.paperPlaneOutline}
                  title={Strings.sendMoney}
                />
                <QuickActionItem
                  icon={RNVectorIcons.Ionicons.paperPlaneOutline}
                  title={Strings.billPayment}
                />
                <QuickActionItem
                  icon={RNVectorIcons.Ionicons.paperPlaneOutline}
                  title={Strings.mobilePackages}
                />
              </View>
            </View>
          </CustomSection>
          {/* More with easypaisa */}
          <CustomSection title={Strings.sectionTitle.moreWithEasyPaisa}>
            <CustomCarousel />
          </CustomSection>
          {/* Debit Card */}
          <CustomSection title={Strings.sectionTitle.getDebitCard}>
            <View style={styles.miniAppSectionContainer}>
              <DebitCard
                title={Strings.debitCard.onlineCardTitle}
                subtitle={Strings.debitCard.onlineCardSubtitle}
              />
              <DebitCard
                title={Strings.debitCard.plasticCardTitle}
                subtitle={Strings.debitCard.plasticCardSubtitle}
                bgDark
              />
            </View>
          </CustomSection>
          {/* Mini Apps */}
          <CustomSection title={Strings.sectionTitle.discoverMiniApps}>
            <CustomCarousel />
          </CustomSection>
          {/* Promotion */}
          <CustomSection title={Strings.sectionTitle.whatsNew}>
            <PromotionScroll />
          </CustomSection>
          {/* Schedule Transaction */}
          <CustomSection title={Strings.sectionTitle.scheduleTransactions}>
            <CustomCard
              title={Strings.CustomCard.scheduleCard.title}
              subtitle={Strings.CustomCard.scheduleCard.subtitle}
              buttonText={Strings.buttonText.schedulePayments}
              icon={IconImages.star}
            />
          </CustomSection>
          {/* Help */}
          <CustomSection childrenStyle={{marginVertical: 0}}>
            <CustomCard
              title={Strings.CustomCard.helpCard.title}
              subtitle={Strings.CustomCard.helpCard.subtitle}
              buttonText={Strings.buttonText.getHelp}
              icon={IconImages.star}
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

  profileContainer: {},
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
  accountCardContainer: {
    paddingHorizontal: 16,

    paddingBottom: 26,
    backgroundColor: Colors.white_fff,
  },

  bodyContainer: {
    paddingHorizontal: 16,
  },

  quickActionContainer: {
    paddingHorizontal: 16,
  },
  quickActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  miniAppSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
