import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Test from '../screens/Test';
import ItemDetails from '../screens/ItemDetails';
import CongratsScreen from '../screens/CongratsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
        gestureEnabled: false,  // Disable swipe gesture to open the drawer
        headerShown: false,     // Hide header if not needed
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Logout" component={Test} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
