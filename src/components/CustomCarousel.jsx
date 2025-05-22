import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Colors from '../utils/constants/Colors';

const {width: screenWidth} = Dimensions.get('window');
const ITEMS_PER_PAGE = 12;

const ITEMS_PER_ROW = 5;
const ITEM_WIDTH = screenWidth / 5 - 20;
const GRID_WIDTH = ITEM_WIDTH * ITEMS_PER_ROW + 20;

const items = [
  {id: '1', icon: require('../assets/icons/cash.png'), title: 'Easyload'},
  {id: '2', icon: require('../assets/icons/cash.png'), title: 'Easycash'},
  {id: '3', icon: require('../assets/icons/cash.png'), title: 'Savings Pocket'},
  {id: '4', icon: require('../assets/icons/cash.png'), title: 'Invite & Earn'},
  {id: '5', icon: require('../assets/icons/cash.png'), title: 'Donations'},
  {id: '6', icon: require('../assets/icons/cash.png'), title: 'Term Deposit'},
  {id: '7', icon: require('../assets/icons/cash.png'), title: 'Daily Rewards'},
  {
    id: '8',
    icon: require('../assets/icons/cash.png'),
    title: 'Buy Now Pay Later',
  },
  {
    id: '9',
    icon: require('../assets/icons/cash.png'),
    title: 'Insurance Marketplace',
  },
  {id: '10', icon: require('../assets/icons/cash.png'), title: 'M-Tag'},
  {id: '11', icon: require('../assets/icons/cash.png'), title: 'Rs.1 Game'},
  {id: '12', icon: require('../assets/icons/cash.png'), title: 'Raast Payment'},
  {id: '13', icon: require('../assets/icons/cash.png'), title: 'Discounts'},
  {id: '14', icon: require('../assets/icons/cash.png'), title: 'Mini App'},
  {id: '15', icon: require('../assets/icons/cash.png'), title: 'Topups'},
  {id: '16', icon: require('../assets/icons/cash.png'), title: 'Remittance'},
  {id: '17', icon: require('../assets/icons/cash.png'), title: 'Education'},
  {id: '18', icon: require('../assets/icons/cash.png'), title: 'NADRA fee'},
  {
    id: '19',
    icon: require('../assets/icons/cash.png'),
    title: 'Online Payment',
  },
  {id: '20', icon: require('../assets/icons/cash.png'), title: 'Enter and Win'},
  {id: '21', icon: require('../assets/icons/cash.png'), title: 'Credit Score'},
  {id: '22', icon: require('../assets/icons/cash.png'), title: 'Tohfa'},
];

const chunkArrayWithSeeAll = (array, pageSize) => {
  const realPerPage = pageSize - 1;
  const chunked = [];

  for (let i = 0; i < array.length; i += realPerPage) {
    const slice = array.slice(i, i + realPerPage);

    slice.push({
      id: `see-all-${Math.floor(i / realPerPage)}`,
      icon: require('../assets/icons/more.png'),
      title: 'See All',
    });

    chunked.push(slice);
  }

  return chunked;
};

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pages = chunkArrayWithSeeAll(items, ITEMS_PER_PAGE);

  const renderPage = pageItems => (
    <View style={styles.pageContainer}>
      <View style={styles.page}>
        {pageItems.map(item => (
          <View key={item.id} style={styles.item}>
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.icon} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
        <Carousel
          width={GRID_WIDTH}
          height={270}
          data={pages}
          scrollAnimationDuration={500}
          onSnapToItem={index => setCurrentIndex(index)}
          renderItem={({item}) => renderPage(item)}
        />
      </View>

      {/* Pagination Indicators */}
      <View style={styles.pagination}>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 16,
  },
  carouselWrapper: {
    width: '90%',
    height: 270,
    overflow: 'hidden',
  },
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    width: GRID_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item: {
    width: screenWidth / 5 - 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },

  titleContainer: {
    height: 30,

    alignItems: 'center',
    marginTop: 6,
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: Colors.green_04bb5f,
  },
  inactiveDot: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: 'transparent',
  },
});
