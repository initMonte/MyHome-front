import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Publicaciones from '../ui/screens/landingInmoviliaria/publicaciones/Publicaciones';
import Publicar from '../ui/screens/landingInmoviliaria/publicar/Publicar';
import Perfil from '../ui/screens/landingInmoviliaria/perfil/Perfil';

import i18n from '../assets/strings/I18n';
import Theme from '../styles/Theme';
import NavigatorConstant from './NavigatorConstant';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        options={{
          tabBarLabel: i18n.t('tabs.publicaciones'),
          tabBarIcon: () => (
            <VectorIcon
              name="home-outline"
              color={Theme.colors.SECONDARY}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOVILIARIA_STACK.PUBLICAR}
        component={Publicar}
        options={{
          tabBarLabel: i18n.t('tabs.publicar'),
          tabBarIcon: () => (
            <VectorIcon
              name="plus-circle"
              color={Theme.colors.SECONDARY}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOVILIARIA_STACK.PERFIL}
        component={Perfil}
        options={{
          tabBarLabel: i18n.t('tabs.perfil'),
          tabBarIcon: () => (
            <VectorIcon
              name="account-outline"
              color={Theme.colors.SECONDARY}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default LandingInmoviliariaStackNavigator;
