import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PublicacionXUI from './PublicacionXUI';

function PublicacionX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showEditarPublicacionX = () => {
    navigation.push(
      NavigatorConstant.INMOBILIARIA_PUBLICACIONES_STACK.EDITAR_PUBLICACION_X,
    );
  };

  return (
    <PublicacionXUI
      goBack={goBack}
      showEditarPublicacionX={showEditarPublicacionX}
    />
  );
}

export default PublicacionX;
