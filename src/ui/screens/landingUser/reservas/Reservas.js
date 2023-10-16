import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import ReservasUI from './ReservasUI';

function Reservas() {
  const navigation = useNavigation();

  return <ReservasUI />;
}

export default Reservas;
