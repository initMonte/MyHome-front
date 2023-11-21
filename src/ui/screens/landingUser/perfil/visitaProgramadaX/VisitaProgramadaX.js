import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import VisitaProgramadaXUI from './VisitaProgramadaXUI';

function VisitaProgramadaX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showPublicacionX = () => {
    navigation.push(NavigatorConstant.USER_PERFIL_STACK.PUBLICACION_X);
  };

  return (
    <VisitaProgramadaXUI goBack={goBack} showPublicacionX={showPublicacionX} />
  );
}

export default VisitaProgramadaX;
