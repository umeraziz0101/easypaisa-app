import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/constants/Colors';

const {width: screenWidth} = Dimensions.get('window');
const ITEMS_PER_PAGE = 12;

const ITEMS_PER_ROW = 5;
const ITEM_WIDTH = screenWidth / 5 - 20;
const GRID_WIDTH = ITEM_WIDTH * ITEMS_PER_ROW + 20;

const items = [
  {id: '1', icon: 'home', title: 'Easyload'},
  {id: '2', icon: 'user', title: 'Easycash'},
  {id: '3', icon: 'bell', title: 'Savings Pocket'},
  {id: '4', icon: 'cog', title: 'Invite & Earn'},
  {id: '5', icon: 'heart', title: 'Donations'},
  {id: '6', icon: 'star', title: 'Term Deposit'},
  {id: '7', icon: 'camera', title: 'Daily Rewards'},
  {id: '8', icon: 'music', title: 'Buy Now Pay Later'},
  {id: '9', icon: 'gift', title: 'Insurance Marketplace'},
  {id: '10', icon: 'globe', title: 'M-Tag'},
  {id: '11', icon: 'envelope', title: 'Rs.1 Game'},
  {id: '12', icon: 'calendar', title: 'Raast Payment'},
  {id: '13', icon: 'comment', title: 'Discounts'},
  {id: '14', icon: 'shopping-cart', title: 'Mini App'},
  {id: '15', icon: 'lock', title: 'Topups'},
  {id: '16', icon: 'book', title: 'Remittance'},
  {id: '17', icon: 'book', title: 'Education'},
  {id: '18', icon: 'book', title: 'NADRA fee'},
  {id: '19', icon: 'book', title: 'Online Payment'},
  {id: '20', icon: 'book', title: 'Enter and Win'},
  {id: '21', icon: 'book', title: 'Credit Score'},
  {id: '22', icon: 'book', title: 'Tohfa'},
  {id: '23', icon: 'book', title: 'Library'},
  {id: '24', icon: 'book', title: 'Library'},
  {id: '25', icon: 'book', title: 'Library'},
  {id: '26', icon: 'book', title: 'Library'},
  {id: '27', icon: 'book', title: 'Library'},
  {id: '28', icon: 'book', title: 'Library'},
  {id: '29', icon: 'book', title: 'Library'},
  {id: '30', icon: 'book', title: 'Library'},
  {id: '31', icon: 'book', title: 'Library'},
  {id: '32', icon: 'book', title: 'Library'},
  {id: '33', icon: 'book', title: 'Library'},
  {id: '34', icon: 'book', title: 'Library'},
];

const chunkArrayWithSeeAll = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);

    const seeAllItem = {
      id: `see-all-${i / size}`,
      icon: 'ellipsis-h',
      title: 'See All',
    };

    if (chunk.length === size) {
      chunk[size - 1] = seeAllItem;
    } else {
      chunk.push(seeAllItem);
    }

    chunked.push(chunk);
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
              <FontAwesome name={item.icon} size={30} color="#333" />
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
      <Carousel
        width={screenWidth}
        height={270}
        data={pages}
        scrollAnimationDuration={500}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({item}) => renderPage(item)}
      />

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
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    marginTop: 6,
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
