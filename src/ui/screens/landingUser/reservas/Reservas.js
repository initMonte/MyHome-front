import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import ReservasUI from './ReservasUI';

function Reservas() {
  const navigation = useNavigation();

  const showPublicacionX = () => {
    navigation.push(NavigatorConstant.USER_RESERVAS_STACK.PUBLICACION_X);
  };

  return <ReservasUI showPublicacionX={showPublicacionX} />;
}

export default Reservas;
