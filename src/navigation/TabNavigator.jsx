import React from 'react';
import Routes from '../utils/constants/Routes';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CashPointsScreen from '../screens/CashPointsScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar, View} from 'react-native';
import Colors from '../utils/constants/Colors';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.home.name}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, marginTop: 4},

        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === Routes.home.title) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === Routes.cashPoints.name) {
            iconName = focused ? 'location-sharp' : 'location-outline';
          } else if (route.name === Routes.promotions.name) {
            iconName = focused ? 'pricetags' : 'pricetags-outline';
          } else if (route.name === Routes.myAccount.name) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                height: size + 8,
                borderTopWidth: focused ? 1 : 0,
                borderTopColor: Colors.green_04bb5f,
              }}>
              <StatusBar barStyle={'dark-content'} />
              <View style={{marginTop: 8}}>
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            </View>
          );
        },
        tabBarActiveTintColor: Colors.green_04bb5f,
        tabBarInactiveTintColor: Colors.black_111,
        tabBarStyle: {height: 90},
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
        name={Routes.promotions.name}
        component={PromotionsScreen}
        options={{title: Routes.promotions.title}}
      />
      <Tab.Screen
        name={Routes.myAccount.name}
        component={MyAccountScreen}
        options={{title: Routes.myAccount.name}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
