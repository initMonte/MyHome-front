import React from 'react';
import {useNavigation} from '@react-navigation/native';

import CalificarInmobiliariaUI from './CalificarInmobiliariaUI';

function CalificarInmobiliaria() {
  const navigation = useNavigation();

  return <CalificarInmobiliariaUI />;
}

export default CalificarInmobiliaria;
