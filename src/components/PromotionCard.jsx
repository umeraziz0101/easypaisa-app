import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Colors from '../utils/constants/Colors';

const PromotionCard = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode="stretch"
        />
      </View>
      <View style={[styles.cardContent]}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Read more</Text>
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
    overflow: 'hidden',
    elevation: 0.5,
    backgroundColor: Colors.white_fff,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  cardContent: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  tagText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#666',
  },
  readMore: {
    fontSize: 14,
    color: Colors.green_04bb5f,
    fontWeight: '500',
  },
});
