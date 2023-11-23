import React from 'react';
import {useNavigation} from '@react-navigation/native';

import CalificarInmobiliariaUI from './CalificarInmobiliariaUI';

function CalificarInmobiliaria() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.popToTop();
  };

  return <CalificarInmobiliariaUI goBack={goBack} />;
}

export default CalificarInmobiliaria;
