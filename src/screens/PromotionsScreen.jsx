import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import PromotionCard from '../components/PromotionCard';
import CustomHeader from '../components/CustomHeader';
import {Loader} from '../components/Loader';
import Strings from '../utils/constants/Strings';
import Colors from '../utils/constants/Colors';
import {promotions} from '../data/DataManager';
import Constants from '../utils/constants/Constants';

const PromotionsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [promotionsData, setPromotionsData] = useState([]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setPromotionsData(promotions);
      setLoading(false);
    }, Constants.millisecondsLoading);
    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({item}) => <PromotionCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader title={Strings.header.title.promotionScreen} />
      <Loader visible={loading} />
      <View style={styles.listContainer}>
        <FlatList
          data={promotionsData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white_fff,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  listContainer: {
    flex: 1,
  },
});

export default PromotionsScreen;
