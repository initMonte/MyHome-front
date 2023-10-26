import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Alquiler from '../ui/screens/landingInmobiliaria/publicaciones/alquiler/Alquiler';
import Venta from '../ui/screens/landingInmobiliaria/publicaciones/venta/Venta';

import NavigatorConstant from './NavigatorConstant';
import Theme from '../styles/Theme';

const Tab = createMaterialTopTabNavigator();

function PublicacionesTopNavigator() {
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
        tabBarInactiveTintColor: Theme.colors.PLACEHOLDER,
      }}>
      <Tab.Screen
        name={NavigatorConstant.PUBLICACIONES_STACK.ALQUILER}
        component={Alquiler}
      />
      <Tab.Screen
        name={NavigatorConstant.PUBLICACIONES_STACK.VENTA}
        component={Venta}
      />
    </Tab.Navigator>
  );
}

export default PublicacionesTopNavigator;
