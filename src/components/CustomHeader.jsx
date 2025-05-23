import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/constants/Colors';
import {useNavigation} from '@react-navigation/native';
import Routes from '../utils/constants/Routes';
import {RNVectorIcons} from '../utils/assets/Icons';

const CustomHeader = ({backgroundColor, title, backIconColor}) => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.navigate(Routes.mainTabs.name, {
      screen: Routes.tabs.name,
      params: {
        screen: Routes.home.name,
      },
    });
  };
  return (
    <View
      style={[
        styles.header,
        backgroundColor && {backgroundColor: backgroundColor},
      ]}>
      <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
        <Ionicons
          name={RNVectorIcons.Ionicons.chevronBack}
          size={24}
          color={backIconColor ? backIconColor : Colors.white_fff}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
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
    color: Colors.white_fff,
    fontSize: 18,
  },
  placeholder: {
    width: 40,
  },
});
