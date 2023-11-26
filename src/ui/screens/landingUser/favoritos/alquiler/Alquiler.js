import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import AlquilerUI from './AlquilerUI';

function Alquiler() {
  const navigation = useNavigation();

  const showPublicacionX = () => {
    navigation.push(NavigatorConstant.USER_FAVORITOS_STACK.PUBLICACION_X);
  };

  return <AlquilerUI showPublicacionX={showPublicacionX} />;
}

export default Alquiler;
