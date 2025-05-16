import React from 'react';
import {StyleSheet, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import PromotionCard from '../components/PromotionCard';
import CustomHeader from '../components/CustomHeader';

const promotionsData = [
  {
    id: '1',
    title: 'Watch every match live in just Rs. 1',
    description: 'Subscribe & stream 🏏',
    image: require('../assets/images/promotion1.png'),
    tag: 'Cricket in Rs. 1 🏏',
  },
  {
    id: '2',
    title: 'Get 20% Extra',
    description: 'Shop & clean free 👍',
    image: require('../assets/images/promotion2.png'),
    tag: 'BreaO Premium Detergent! 💪',
  },
  {
    id: '3',
    title: 'Book & win Rs. 10K!',
    description: 'Get tickets via booking.com 🚂',
    image: require('../assets/images/promotion3.png'),
    tag: 'Travel karoo',
  },
  {
    id: '4',
    title: 'Level up your easypoints account for just Rs. 1',
    description: 'Eligible titles, every day 🧾',
    image: require('../assets/images/promotion4.png'),
    tag: 'Rs. 1 mein upgrade! 💸',
  },
  {
    id: '5',
    title: 'Free life insurance pe free phone upgrade!',
    description: 'Terms apply 📱',
    image: require('../assets/images/promotion5.png'),
    tag: 'Free phone upgrade! 📱',
  },
  {
    id: '6',
    title: 'More invites more rewards',
    description: 'Invite & earn more! 💸',
    image: require('../assets/images/promotion6.png'),
    tag: 'Invite & earn more! 💸',
  },
  {
    id: '7',
    title: 'Grocery shopping just got easier',
    description: 'Shop on fastest on-demand grocery home shop',
    image: require('../assets/images/promotion7.png'),
    tag: 'Shop. Pay. Done.',
  },
  {
    id: '8',
    title: 'Shop non-stop with Daraz discounts!',
    description: 'Pay with easypaisa & save! 💰',
    image: require('../assets/images/promotion7.png'),
    tag: '15% off on Daraz 🛒',
  },
  {
    id: '9',
    title: 'Insurance aur prize dono free',
    description: 'Win a bike for free! 🏍',
    image: require('../assets/images/promotion7.png'),
    tag: 'Win a bike for free! 🏍',
  },
];

const PromotionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {promotionsData.map(item => (
          <PromotionCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  scrollView: {
    flex: 1,
  },
});

export default PromotionsScreen;
