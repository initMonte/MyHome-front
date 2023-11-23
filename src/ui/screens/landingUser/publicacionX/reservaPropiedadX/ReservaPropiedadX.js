import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import ReservaPropiedadXUI from './ReservaPropiedadXUI';

function ReservaPropiedadX() {
  const navigation = useNavigation();

  const showCalificarInmobiliaria = () => {
    navigation.push(
      NavigatorConstant.USER_PUBLICACION_X_STACK.CALIFICAR_INMOBILIARIA,
    );
  };

  return (
    <ReservaPropiedadXUI
      showCalificarInmobiliaria={showCalificarInmobiliaria}
    />
  );
}

export default ReservaPropiedadX;
