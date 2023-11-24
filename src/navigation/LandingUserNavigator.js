import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import UserHomeNavigator from './UserHomeNavigator';
import UserReservasNavigator from './UserReservasNavigator';
import UserFavoritosNavigator from './UserFavoritosNavigator';
import UserPefilNavigator from './UserPerfilNavigator';

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
        component={UserHomeNavigator}
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
        component={UserReservasNavigator}
        options={{
          tabBarLabel: i18n.t('tabs.reservas'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="key-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.FAVORITOS}
        component={UserFavoritosNavigator}
        options={{
          tabBarLabel: i18n.t('tabs.favoritos'),
          tabBarIcon: ({color}) => (
            <VectorIcon name="heart-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigatorConstant.LANDING_USER_STACK.PERFIL}
        component={UserPefilNavigator}
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
