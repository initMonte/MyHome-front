import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Reservas from '../ui/screens/landingUser/reservas/Reservas';
import PublicacionX from '../ui/screens/landingUser/publicacionX/PublicacionX';

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
      <Stack.Screen
        name={NavigatorConstant.USER_FAVORITOS_STACK.PUBLICACION_X}
        component={PublicacionX}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default UserReservasNavigator;
