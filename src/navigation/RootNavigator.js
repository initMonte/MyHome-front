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
  const role = useSelector(state => state.auth.user.role);

  const initialRoute = () => {
    if (userAuth) {
      if (role === 'user') {
        return NavigatorConstant.NAVIGATOR.LANDING_USER;
      }
      return NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA;
    }
    return NavigatorConstant.NAVIGATOR.LOGIN;
  };

  return (
    <Stack.Navigator
      initialRouteName={initialRoute()}
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
