import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/constants/Colors';

const {width: screenWidth} = Dimensions.get('window');
const ITEMS_PER_PAGE = 12;

const ITEMS_PER_ROW = 5;
const ITEM_WIDTH = screenWidth / 5 - 20;
const GRID_WIDTH = ITEM_WIDTH * ITEMS_PER_ROW + 20; // Adjust margin space if needed

const items = [
  {id: '1', icon: 'home', title: 'Home'},
  {id: '2', icon: 'user', title: 'User'},
  {id: '3', icon: 'bell', title: 'Notifications'},
  {id: '4', icon: 'cog', title: 'Settings'},
  {id: '5', icon: 'heart', title: 'Favorites'},
  {id: '6', icon: 'star', title: 'Rated'},
  {id: '7', icon: 'camera', title: 'Camera'},
  {id: '8', icon: 'music', title: 'Music'},
  {id: '9', icon: 'gift', title: 'Gifts'},
  {id: '10', icon: 'globe', title: 'Explore'},
  {id: '11', icon: 'envelope', title: 'Messages'},
  {id: '12', icon: 'calendar', title: 'Calendar'},
  {id: '13', icon: 'comment', title: 'Comments'},
  {id: '14', icon: 'shopping-cart', title: 'Cart'},
  {id: '15', icon: 'lock', title: 'Privacy'},
  {id: '16', icon: 'book', title: 'Library'},
  {id: '17', icon: 'book', title: 'Library'},
  {id: '18', icon: 'book', title: 'Library'},
  {id: '19', icon: 'book', title: 'Library'},
  {id: '20', icon: 'book', title: 'Library'},
  {id: '21', icon: 'book', title: 'Library'},
  {id: '22', icon: 'book', title: 'Library'},
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
            <FontAwesome name={item.icon} size={30} color="#333" />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={350}
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
    paddingVertical: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 16,
  },
  pageContainer: {
    // backgroundColor: '#aa2',
    // paddingVertical: 40,
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
  title: {
    fontSize: 13,
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
