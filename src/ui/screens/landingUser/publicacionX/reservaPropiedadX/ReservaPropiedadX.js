import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ReservaPropiedadXUI from './ReservaPropiedadXUI';

function ReservaPropiedadX() {
  const navigation = useNavigation();

  return <ReservaPropiedadXUI />;
}

export default ReservaPropiedadX;
