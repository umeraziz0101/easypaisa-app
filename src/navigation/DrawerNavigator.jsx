import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import MenuDrawer from '../components/MenuDrawer';
import Routes from '../utils/constants/Routes';
import {appDetail, users} from '../data/DataManager';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType="front"
      screenOptions={{headerShown: false, drawerStyle: {width: '100%'}}}
      drawerContent={props => (
        <MenuDrawer {...props} user={users[0]} version={appDetail.version} />
      )}>
      <Drawer.Screen name={Routes.tabs.name} component={TabNavigator} />
    </Drawer.Navigator>
  );
}
