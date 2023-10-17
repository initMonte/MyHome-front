import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Alquiler from '../ui/screens/landingUser/favoritos/alquiler/Alquiler';
import Venta from '../ui/screens/landingUser/favoritos/venta/Venta';

import NavigatorConstant from './NavigatorConstant';

const Tab = createMaterialTopTabNavigator();
function FavoritosTopNavigator() {
  return (
    <Tab.Navigator>
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
