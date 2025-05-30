import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Colors from '../utils/constants/Colors';
import CustomAccordion from '../components/CustomAccordion';
import Strings from '../utils/constants/Strings';

import {
  MapView,
  Camera,
  PointAnnotation,
} from '@maplibre/maplibre-react-native';

import {cashPoints, cashPointsBVS} from '../data/DataManager';
import Keys from '../utils/constants/Keys';

const CashPointsScreen = () => {
  const [cashActive, setCashActive] = useState(true);
  const [cashBVSActive, setCashBVSActive] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CustomHeader title={Strings.header.title.cashPointsScreen} />
      <MapView style={styles.map} styleURL={Keys.mapView.styleUrl}>
        <Camera zoomLevel={8} centerCoordinate={cashPoints[0].coordinate} />

        {cashActive &&
          cashPoints.map(point => (
            <PointAnnotation
              key={point.id}
              id={point.id}
              coordinate={point.coordinate}>
              <View
                style={[styles.marker, {backgroundColor: Colors.black_111}]}
              />
            </PointAnnotation>
          ))}
        {cashBVSActive &&
          cashPointsBVS.map(point => (
            <PointAnnotation
              key={point.id}
              id={point.id}
              coordinate={point.coordinate}>
              <View
                style={[styles.marker, {backgroundColor: Colors.red_ff0000}]}
              />
            </PointAnnotation>
          ))}
      </MapView>
      <CustomAccordion
        cashActive={cashActive}
        onToggleCash={() => setCashActive(prev => !prev)}
        cashBVSActive={cashBVSActive}
        onToggleCashBVS={() => setCashBVSActive(prev => !prev)}
      />
    </SafeAreaView>
  );
};

export default CashPointsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white_fff,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: Colors.white_fff,
  },
});
