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

const Tab = createBottomTabNavigator();

const CameraTabButton = ({onPress}) => (
  <TouchableOpacity style={styles.cameraButtonContainer} onPress={onPress}>
    <View style={styles.cameraButton}>
      <Ionicons name="camera" size={28} color={Colors.white_fff} />
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
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === Routes.home.name) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === Routes.cashPoints.name) {
            iconName = focused ? 'location-sharp' : 'location-outline';
          } else if (route.name === Routes.promotions.name) {
            iconName = focused ? 'pricetags' : 'pricetags-outline';
          } else if (route.name === Routes.myAccount.name) {
            iconName = focused ? 'person' : 'person-outline';
          }

          if (route.name === Routes.camera.name) {
            return null;
          }

          return (
            <View style={styles.iconContainer}>
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
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.green_04bb5f,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
});

export default TabNavigator;
