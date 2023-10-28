import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import ConsultasUI from './ConsultasUI';

function Consultas() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showConsultaX = () => {
    navigation.push(NavigatorConstant.INMOBILIARIA_PERFIL_STACK.CONSULTA_X);
  };

  return <ConsultasUI goBack={goBack} showConsultaX={showConsultaX} />;
}

export default Consultas;
