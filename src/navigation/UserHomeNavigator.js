import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../ui/screens/landingUser/home/Home';
import FiltroBusqueda from '../ui/screens/landingUser/home/filtroBusqueda/FiltroBusqueda';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function UserReservasNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.USER_HOME_STACK.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.USER_HOME_STACK.HOME}
        component={Home}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_HOME_STACK.FILTROS_BUSQUEDA}
        component={FiltroBusqueda}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default UserReservasNavigator;
