import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Reservas from '../ui/screens/landingUser/reservas/Reservas';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function UserReservasNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.USER_RESERVAS_STACK.RESERVAS}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.USER_RESERVAS_STACK.RESERVAS}
        component={Reservas}
      />
    </Stack.Navigator>
  );
}

export default UserReservasNavigator;
