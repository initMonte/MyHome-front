import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PublicacionX from '../ui/screens/landingUser/publicacionX/PublicacionX';
import ContactoPropiedadX from '../ui/screens/landingUser/publicacionX/contactoPropiedadX/ContactoPropiedadX';
import ReservaPropiedadX from '../ui/screens/landingUser/publicacionX/reservaPropiedadX/ReservaPropiedadX';
import CalificarInmobiliaria from '../ui/screens/landingUser/publicacionX/calificarInmobiliaria/CalificarInmobiliaria';
import VerCalificaciones from '../ui/screens/landingUser/publicacionX/verCalificaciones/VerCalificaciones';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function InmobiliariaPublicacionXNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={
        NavigatorConstant.USER_PUBLICACION_X_STACK.PUBLICACION_X
      }
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.USER_PUBLICACION_X_STACK.PUBLICACION_X}
        component={PublicacionX}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PUBLICACION_X_STACK.CONTACTO_PROPIEDAD_X}
        component={ContactoPropiedadX}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PUBLICACION_X_STACK.RESERVA_PROPIEDAD_X}
        component={ReservaPropiedadX}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PUBLICACION_X_STACK.CALIFICAR_INMOBILIARIA}
        component={CalificarInmobiliaria}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PUBLICACION_X_STACK.VER_CALIFICACIONES}
        component={VerCalificaciones}
      />
    </Stack.Navigator>
  );
}

export default InmobiliariaPublicacionXNavigator;
