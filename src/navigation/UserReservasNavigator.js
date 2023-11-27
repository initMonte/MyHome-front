import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import i18n from '../assets/strings/I18n';
import Reservas from '../ui/screens/landingUser/reservas/Reservas';
import UserPublicacionXNavigator from './UserPublicacionXNavigator';

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
        options={{
          headerShown: true,
          headerTitle: i18n.t('tabs.reservas'),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_RESERVAS_STACK.PUBLICACION_X}
        component={UserPublicacionXNavigator}
      />
    </Stack.Navigator>
  );
}

export default UserReservasNavigator;
