import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Publicaciones from '../ui/screens/landingInmoviliaria/publicaciones/Publicaciones';
import Publicar from '../ui/screens/landingInmoviliaria/publicar/Publicar';
import Perfil from '../ui/screens/landingInmoviliaria/perfil/Perfil';

import NavigatorConstant from './NavigatorConstant';

const Tab = createBottomTabNavigator();
function LandingInmoviliariaStackNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={
        NavigatorConstant.LANDING_INMOVILIARIA_STACK.PUBLICACIONES
      }>
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOVILIARIA_STACK.PUBLICACIONES}
        component={Publicaciones}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOVILIARIA_STACK.PUBLICAR}
        component={Publicar}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOVILIARIA_STACK.PERFIL}
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export default LandingInmoviliariaStackNavigator;
