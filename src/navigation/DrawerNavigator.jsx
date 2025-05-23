import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import MenuDrawer from '../components/MenuDrawer';
import data from '../data/data.json';
import Routes from '../utils/constants/Routes';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType="front"
      screenOptions={{headerShown: false, drawerStyle: {width: '100%'}}}
      drawerContent={props => (
        <MenuDrawer
          {...props}
          user={data.users[0]}
          version={data.app.version}
        />
      )}>
      <Drawer.Screen name={Routes.tabs.name} component={TabNavigator} />
    </Drawer.Navigator>
  );
}
