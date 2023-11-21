import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Perfil from '../ui/screens/landingUser/perfil/Perfil';
import MisDatos from '../ui/screens/landingUser/perfil/misDatos/MisDatos';
import Consultas from '../ui/screens/landingUser/perfil/consultas/Consultas';
import ConsultaX from '../ui/screens/landingUser/perfil/consultaX/ConsultaX';
import VisitasProgramadas from '../ui/screens/landingUser/perfil/visitasProgramadas/VisitasProgramadas';
import VisitaProgramadaX from '../ui/screens/landingUser/perfil/visitaProgramadaX/VisitaProgramadaX';
import PublicacionX from '../ui/screens/landingUser/publicacionX/PublicacionX';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function UserPefilNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.USER_PERFIL_STACK.PERFIL}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.PERFIL}
        component={Perfil}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.MIS_DATOS}
        component={MisDatos}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.CONSULTAS}
        component={Consultas}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.CONSULTA_X}
        component={ConsultaX}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.VISITAS_PROGRAMADAS}
        component={VisitasProgramadas}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.VISITA_PROGRAMADA_X}
        component={VisitaProgramadaX}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.PUBLICACION_X}
        component={PublicacionX}
      />
    </Stack.Navigator>
  );
}

export default UserPefilNavigator;
