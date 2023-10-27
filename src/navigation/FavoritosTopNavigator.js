import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Alquiler from '../ui/screens/landingUser/favoritos/alquiler/Alquiler';
import Venta from '../ui/screens/landingUser/favoritos/venta/Venta';

import NavigatorConstant from './NavigatorConstant';
import Theme from '../styles/Theme';

const Tab = createMaterialTopTabNavigator();
function FavoritosTopNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: Theme.fonts.S,
        },
        tabBarIndicatorStyle: {
          borderBottomWidth: 2,
          borderColor: Theme.colors.PRIMARY,
        },
        tabBarActiveTintColor: Theme.colors.PRIMARY,
        tabBarInactiveTintColor: Theme.colors.SECONDARY,
      }}>
      <Tab.Screen
        name={NavigatorConstant.FAVORITOS_STACK.ALQUILER}
        component={Alquiler}
      />
      <Tab.Screen
        name={NavigatorConstant.FAVORITOS_STACK.VENTA}
        component={Venta}
      />
    </Tab.Navigator>
  );
}

export default FavoritosTopNavigator;
