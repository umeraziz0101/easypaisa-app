import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import MenuDrawer from '../components/MenuDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType="front"
      screenOptions={{headerShown: false, drawerStyle: {width: '100%'}}}
      drawerContent={() => <MenuDrawer />}>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
