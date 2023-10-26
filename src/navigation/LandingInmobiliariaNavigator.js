import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Publicaciones from '../ui/screens/landingInmobiliaria/publicaciones/Publicaciones';
import Publicar from '../ui/screens/landingInmobiliaria/publicar/Publicar';
import Perfil from '../ui/screens/landingInmobiliaria/perfil/Perfil';

import i18n from '../assets/strings/I18n';
import Theme from '../styles/Theme';
import NavigatorConstant from './NavigatorConstant';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function LandingInmobiliariaStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontSize: Theme.fonts.S,
        },
        tabBarActiveTintColor: Theme.colors.PRIMARY,
        tabBarInactiveTintColor: Theme.colors.SECONDARY,
      }}
      initialRouteName={
        NavigatorConstant.LANDING_INMOBILIARIA_STACK.PUBLICACIONES
      }>
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOBILIARIA_STACK.PUBLICACIONES}
        component={Publicaciones}
        options={{
          tabBarLabel: i18n.t('tabs.publicaciones'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOBILIARIA_STACK.PUBLICAR}
        component={Publicar}
        options={{
          tabBarLabel: i18n.t('tabs.publicar'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="plus-circle" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_INMOBILIARIA_STACK.PERFIL}
        component={Perfil}
        options={{
          headerShown: false,
          tabBarLabel: i18n.t('tabs.perfil'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="account-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default LandingInmobiliariaStackNavigator;
