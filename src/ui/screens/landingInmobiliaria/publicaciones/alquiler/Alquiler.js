import React from 'react';
import {useNavigation} from '@react-navigation/native';
//import i18n from '../../../../assets/strings/I18n';

import AlquilerUI from './AlquilerUI';

function Alquiler() {
  const navigation = useNavigation();

  return <AlquilerUI />;
}

export default Alquiler;
