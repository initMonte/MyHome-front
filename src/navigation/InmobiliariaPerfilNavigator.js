import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Perfil from '../ui/screens/landingInmobiliaria/perfil/Perfil';
import MisDatos from '../ui/screens/landingInmobiliaria/perfil/misDatos/MisDatos';
import Consultas from '../ui/screens/landingInmobiliaria/perfil/consultas/Consultas';
import ConsultaX from '../ui/screens/landingInmobiliaria/perfil/consultaX/ConsultaX';
import VisitasProgramadas from '../ui/screens/landingInmobiliaria/perfil/visitasProgramadas/VisitasProgramadas';
import VisitaProgramadaX from '../ui/screens/landingInmobiliaria/perfil/visitaProgramadaX/VisitaProgramadaX';
import Opiniones from '../ui/screens/landingInmobiliaria/perfil/opiniones/Opiniones';
import PublicacionX from '../ui/screens/landingInmobiliaria/publicacionX/PublicacionX';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function InmobiliariaPefilNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.PERFIL}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.PERFIL}
        component={Perfil}
      />
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.MIS_DATOS}
        component={MisDatos}
      />
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.CONSULTAS}
        component={Consultas}
      />
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.CONSULTA_X}
        component={ConsultaX}
      />
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.VISITAS_PROGRAMADAS}
        component={VisitasProgramadas}
      />
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.VISITA_PROGRAMADA_X}
        component={VisitaProgramadaX}
      />
      <Stack.Screen
        name={NavigatorConstant.INMOBILIARIA_PERFIL_STACK.OPINIONES}
        component={Opiniones}
      />
      <Stack.Screen
        name={NavigatorConstant.LANDING_INMOBILIARIA_STACK.PUBLICACION_X}
        component={PublicacionX}
      />
    </Stack.Navigator>
  );
}

export default InmobiliariaPefilNavigator;
