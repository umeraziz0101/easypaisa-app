import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Colors from '../utils/constants/Colors';
import Strings from '../utils/constants/Strings';

const PromotionCard = ({item}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.image}}
          style={styles.cardImage}
          resizeMode="stretch"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {imageLoading && (
          <View style={styles.imageLoader}>
            <ActivityIndicator size="large" color={Colors.green_04bb5f} />
          </View>
        )}
        {imageError && (
          <View style={styles.imageError}>
            <Text style={styles.errorText}>Failed to load image</Text>
          </View>
        )}
      </View>
      <View style={[styles.cardContent]}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>{Strings.buttonText.readMore}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PromotionCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 2,
    borderWidth: 0.2,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: Colors.white_fff,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  imageLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.white_fff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageError: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 14,
    color: Colors.gray_666,
    textAlign: 'center',
  },
  cardContent: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 4,
    color: Colors.green_04bb5f,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDescription: {
    fontSize: 12,
    color: Colors.gray_666,
  },
  readMore: {
    fontSize: 14,
    color: Colors.green_04bb5f,
    fontWeight: '500',
  },
});
