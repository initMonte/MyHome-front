import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PublicacionXUI from './PublicacionXUI';

function PublicacionX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showContactoPropiedadX = () => {
    navigation.push(
      NavigatorConstant.USER_PUBLICACION_X_STACK.CONTACTO_PROPIEDAD_X,
    );
  };

  const showReservaPropiedadX = () => {
    navigation.push(
      NavigatorConstant.USER_PUBLICACION_X_STACK.RESERVA_PROPIEDAD_X,
    );
  };

  const showCalificarInmobiliaria = () => {
    navigation.push(
      NavigatorConstant.USER_PUBLICACION_X_STACK.CALIFICAR_INMOBILIARIA,
    );
  };

  const showVerCalificaciones = () => {
    navigation.push(
      NavigatorConstant.USER_PUBLICACION_X_STACK.VER_CALIFICACIONES,
    );
  };

  return (
    <PublicacionXUI
      goBack={goBack}
      showContactoPropiedadX={showContactoPropiedadX}
      showReservaPropiedadX={showReservaPropiedadX}
      showCalificarInmobiliaria={showCalificarInmobiliaria}
      showVerCalificaciones={showVerCalificaciones}
    />
  );
}

export default PublicacionX;
