import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Publicaciones from '../ui/screens/landingInmobiliaria/publicaciones/Publicaciones';
import PublicacionX from '../ui/screens/landingInmobiliaria/publicacionX/PublicacionX';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function InmobiliariaPublicacionesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={
        NavigatorConstant.INMOBILIARIA_PUBLICACIONES_STACK.PUBLICACIONES_TOP_TAB
      }
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={
          NavigatorConstant.INMOBILIARIA_PUBLICACIONES_STACK
            .PUBLICACIONES_TOP_TAB
        }
        component={Publicaciones}
      />
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PUBLICACIONES_STACK.PUBLICACION_X}
        component={PublicacionX}
      />
    </Stack.Navigator>
  );
}

export default InmobiliariaPublicacionesNavigator;
