import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import VentaUI from './VentaUI';

function Venta() {
  const navigation = useNavigation();

  const showPublicacionX = () => {
    navigation.push(
      NavigatorConstant.INMOBILIARIA_PUBLICACIONES_STACK.PUBLICACION_X,
    );
  };

  return <VentaUI showPublicacionX={showPublicacionX} />;
}

export default Venta;
