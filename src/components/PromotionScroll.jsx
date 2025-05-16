import React from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ImageBox = ({source}) => (
  <LinearGradient
    colors={['#ff007f', '#ffff00']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    style={styles.gradientBorder}>
    <View style={styles.imageContainer}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  </LinearGradient>
);

const PromotionScroll = () => {
  const gifs = [
    require('../assets/gifs/1.gif'),
    require('../assets/gifs/2.gif'),
    require('../assets/gifs/3.gif'),
    require('../assets/gifs/4.gif'),
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      {gifs.map((gif, index) => (
        <ImageBox key={index} source={gif} />
      ))}
    </ScrollView>
  );
};

export default PromotionScroll;

const BOX_SIZE = 150;
const BORDER_WIDTH = 4;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
  },
  gradientBorder: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 16,
    padding: BORDER_WIDTH,
    marginRight: 12,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
