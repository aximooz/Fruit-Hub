import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import IntroScreen from '../screens/IntroScreen';
import NameScreen from '../screens/NameScreen';
import DrawerNavigation from './DrawerNavigation';  // Drawer Navigation Component
import Baskit from '../screens/Baskit';
import CongratsScreen from '../screens/CongratsScreen';
import ItemDetails from '../screens/ItemDetails';

const Stack = createNativeStackNavigator();

const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NameScreen" component={NameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home1" component={DrawerNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="CongratsScreen" component={CongratsScreen} options={{ headerShown: false }} />
        
     
        <Stack.Screen 
          name="Baskit" 
          component={Baskit} 
          options={{ title: 'Cart' }} 
        />
        
        <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
