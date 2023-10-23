import React from 'react';
import {useNavigation} from '@react-navigation/native';
//import i18n from '../../../../assets/strings/I18n';

import VentaUI from './VentaUI';

function Venta() {
  const navigation = useNavigation();

  return <VentaUI />;
}

export default Venta;
