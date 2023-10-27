import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PerfilUI from './PerfilUI';

function Perfil() {
  const navigation = useNavigation();

  const showLogin = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN);
  };

  const showOpiniones = () => {
    navigation.push(NavigatorConstant.INMOBILIARIA_PERFIL_STACK.OPINIONES);
  };

  const showMisDatos = () => {
    navigation.push(NavigatorConstant.INMOBILIARIA_PERFIL_STACK.MIS_DATOS);
  };

  const showConsultas = () => {
    navigation.push(NavigatorConstant.INMOBILIARIA_PERFIL_STACK.CONSULTAS);
  };

  const showVisitasProgramadas = () => {
    navigation.push(
      NavigatorConstant.INMOBILIARIA_PERFIL_STACK.VISITAS_PROGRAMADAS,
    );
  };

  return (
    <PerfilUI
      showLogin={showLogin}
      showMisDatos={showMisDatos}
      showConsultas={showConsultas}
      showVisitasProgramadas={showVisitasProgramadas}
      showOpiniones={showOpiniones}
    />
  );
}

export default Perfil;
