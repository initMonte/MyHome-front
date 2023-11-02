import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import InmobiliariaPublicacionesNavigator from './InmobiliariaPublicacionesNavigator';
import Publicar from '../ui/screens/landingInmobiliaria/publicar/Publicar';
import InmobiliariaPerfilNavigator from './InmobiliariaPerfilNavigator';

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
        NavigatorConstant.LANDING_INMOBILIARIA_STACK.PUBLICACIONES_NAVIGATOR
      }>
      <Tab.Screen
        name={
          NavigatorConstant.LANDING_INMOBILIARIA_STACK.PUBLICACIONES_NAVIGATOR
        }
        component={InmobiliariaPublicacionesNavigator}
        options={{
          headerShown: false,
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
        name={NavigatorConstant.LANDING_INMOBILIARIA_STACK.PERFIL_NAVIGATOR}
        component={InmobiliariaPerfilNavigator}
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
