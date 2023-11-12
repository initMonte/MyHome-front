import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import ConsultaXUI from './ConsultaXUI';

function ConsultaX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showPublicacionX = () => {
    navigation.push(NavigatorConstant.INMOBILIARIA_PERFIL_STACK.PUBLICACION_X);
  };

  return <ConsultaXUI goBack={goBack} showPublicacionX={showPublicacionX} />;
}

export default ConsultaX;
