import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../ui/screens/landingUser/home/Home';
import Reservas from '../ui/screens/landingUser/reservas/Reservas';
import Favoritos from '../ui/screens/landingUser/favoritos/Favoritos';
import Perfil from '../ui/screens/landingUser/perfil/Perfil';

import i18n from '../assets/strings/I18n';
import Theme from '../styles/Theme';
import NavigatorConstant from './NavigatorConstant';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
function LandingUserStackNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={NavigatorConstant.LANDING_USER_STACK.HOME}
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontSize: Theme.fonts.S,
        },
        tabBarActiveTintColor: Theme.colors.PRIMARY,
        tabBarInactiveTintColor: Theme.colors.SECONDARY,
      }}>
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: i18n.t('tabs.home'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.RESERVAS}
        component={Reservas}
        options={{
          tabBarLabel: i18n.t('tabs.reservas'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="key-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.FAVORITOS}
        component={Favoritos}
        options={{
          tabBarLabel: i18n.t('tabs.favoritos'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="heart-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.PERFIL}
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

export default LandingUserStackNavigator;
