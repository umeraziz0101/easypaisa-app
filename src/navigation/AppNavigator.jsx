import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Routes from '../utils/constants/Routes';
import DrawerNavigator from './DrawerNavigator';
// import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.splash.name}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.splash.name} component={SplashScreen} />
        {/* <Stack.Screen name={Routes.mainTabs.name} component={TabNavigator} /> */}
        <Stack.Screen name={Routes.mainTabs.name} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
