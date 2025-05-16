import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';

const CustomHeader = ({backgroundColor}) => {
  const onPressBack = () => {};
  return (
    <View
      style={[
        styles.header,
        backgroundColor && {backgroundColor: backgroundColor},
      ]}>
      <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Promotions</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.green_04bb5f,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  placeholder: {
    width: 40,
  },
});
