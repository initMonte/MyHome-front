import React from 'react';
import {useNavigation} from '@react-navigation/native';

import VerCalificacionesUI from './VerCalificacionesUI';

function VerCalificaciones() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return <VerCalificacionesUI goBack={goBack} />;
}

export default VerCalificaciones;
