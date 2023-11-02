import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavigatorConstant from './NavigatorConstant';
import LoginStackNavigator from './LoginStackNavigator';
import LandingUserNavigator from './LandingUserNavigator';
import LandingInmobiliariaNavigator from './LandingInmobiliariaNavigator';

const Stack = createNativeStackNavigator();
function RootNavigator() {
  const userAuth = useSelector(state => state.auth.session.jwt);
  return (
    <Stack.Navigator
      initialRouteName={
        userAuth
          ? NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA
          : NavigatorConstant.NAVIGATOR.LOGIN
      }
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.NAVIGATOR.LOGIN}
        component={LoginStackNavigator}
      />
      <Stack.Screen
        name={NavigatorConstant.NAVIGATOR.LANDING_USER}
        component={LandingUserNavigator}
      />
      <Stack.Screen
        name={NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA}
        component={LandingInmobiliariaNavigator}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
