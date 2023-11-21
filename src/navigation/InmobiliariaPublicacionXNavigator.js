import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PublicacionX from '../ui/screens/landingInmobiliaria/publicacionX/PublicacionX';
import EditarPublicacionX from '../ui/screens/landingInmobiliaria/editarPublicacionX/EditarPublicacionX';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function InmobiliariaPublicacionXNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={
        NavigatorConstant.INMOBILIARIA_PUBLICACION_X_STACK.PUBLICACION_X
      }
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PUBLICACION_X_STACK.PUBLICACION_X}
        component={PublicacionX}
      />
      <Stack.Screen
        name={
          NavigatorConstant.INMOBILIARIA_PUBLICACION_X_STACK
            .EDITAR_PUBLICACION_X
        }
        component={EditarPublicacionX}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default InmobiliariaPublicacionXNavigator;
