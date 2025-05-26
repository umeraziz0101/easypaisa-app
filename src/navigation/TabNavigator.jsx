import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import CashPointsScreen from '../screens/CashPointsScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import CameraScreen from '../screens/CameraScreen';
import Colors from '../utils/constants/Colors';
import Routes from '../utils/constants/Routes';
import {RNVectorIcons} from '../utils/assets/Icons';

const Tab = createBottomTabNavigator();

const CameraTabButton = ({onPress}) => (
  <TouchableOpacity style={styles.cameraButtonContainer} onPress={onPress}>
    <View style={styles.cameraButton}>
      <Ionicons
        name={RNVectorIcons.Ionicons.camera}
        size={28}
        color={Colors.white_fff}
      />
    </View>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.home.name}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, marginTop: 4},
        tabBarActiveTintColor: Colors.green_04bb5f,
        tabBarInactiveTintColor: Colors.black_111,
        tabBarStyle: {height: 90},
        // tabBarItemStyle: {flex: 1},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === Routes.home.name) {
            iconName = focused
              ? RNVectorIcons.Ionicons.home
              : RNVectorIcons.Ionicons.homeOutline;
          } else if (route.name === Routes.cashPoints.name) {
            iconName = focused
              ? RNVectorIcons.Ionicons.locationSharp
              : RNVectorIcons.Ionicons.locationOutline;
          } else if (route.name === Routes.promotions.name) {
            iconName = focused
              ? RNVectorIcons.Ionicons.pricetags
              : RNVectorIcons.Ionicons.pricetagsOutline;
          } else if (route.name === Routes.myAccount.name) {
            iconName = focused
              ? RNVectorIcons.Ionicons.person
              : RNVectorIcons.Ionicons.personOutline;
          }
          if (route.name === Routes.camera.name) {
            return null;
          }

          return (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.indicator} />}
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
      })}>
      <Tab.Screen
        name={Routes.home.name}
        component={HomeScreen}
        options={{title: Routes.home.title}}
      />
      <Tab.Screen
        name={Routes.cashPoints.name}
        component={CashPointsScreen}
        options={{title: Routes.cashPoints.title}}
      />
      <Tab.Screen
        name={Routes.camera.name}
        component={CameraScreen}
        options={{
          title: '',
          tabBarButton: props => <CameraTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name={Routes.promotions.name}
        component={PromotionsScreen}
        options={{title: Routes.promotions.title}}
      />
      <Tab.Screen
        name={Routes.myAccount.name}
        component={MyAccountScreen}
        options={{title: Routes.myAccount.title}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  cameraButtonContainer: {
    top: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.green_04bb5f,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 6,
    // backgroundColor: '#aa3',
  },
  indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: Colors.green_04bb5f,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
});

export default TabNavigator;
