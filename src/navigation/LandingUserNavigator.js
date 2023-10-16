import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../ui/screens/landingUser/home/Home';
import Reservas from '../ui/screens/landingUser/reservas/Reservas';
import Favoritos from '../ui/screens/landingUser/favoritos/Favoritos';
import Perfil from '../ui/screens/landingUser/perfil/Perfil';

import NavigatorConstant from './NavigatorConstant';

const Tab = createBottomTabNavigator();
function LandingUserStackNavigator() {
  return (
    <Tab.Navigator initialRouteName={NavigatorConstant.LANDING_USER_STACK.HOME}>
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.HOME}
        component={Home}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.RESERVAS}
        component={Reservas}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.FAVORITOS}
        component={Favoritos}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.PERFIL}
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export default LandingUserStackNavigator;
