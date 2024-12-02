import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MapScreen } from '../map/map';
import { HomeTabs } from '../homeTabs/homeTabs';

const Drawer = createDrawerNavigator();

export const MainApp = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='HomeTabs' component={HomeTabs} />
      <Drawer.Screen name='Log out' component={MapScreen} /> 
    </Drawer.Navigator>
  );
}