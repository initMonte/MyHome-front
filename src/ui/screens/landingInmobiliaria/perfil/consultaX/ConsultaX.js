import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';
import PublicacionX from '../../publicacionX/PublicacionX';

import ConsultaXUI from './ConsultaXUI';

function ConsultaX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showPublicacionX = () => {
    navigation.push(NavigatorConstant.LANDING_INMOBILIARIA_STACK.PUBLICACION_X);
  };

  return <ConsultaXUI goBack={goBack} showPublicacionX={showPublicacionX} />;
}

export default ConsultaX;
