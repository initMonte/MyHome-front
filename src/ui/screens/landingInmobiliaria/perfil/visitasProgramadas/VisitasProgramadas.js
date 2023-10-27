import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import VisitasProgramadasUI from './VisitasProgramadasUI';

function VisitasProgramadas() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showVisitaProgramadaX = () => {
    navigation.push(
      NavigatorConstant.INMOBILIARIA_PERFIL_STACK.VISITA_PROGRAMADA_X,
    );
  };

  return (
    <VisitasProgramadasUI
      goBack={goBack}
      showVisitaProgramadaX={showVisitaProgramadaX}
    />
  );
}

export default VisitasProgramadas;
