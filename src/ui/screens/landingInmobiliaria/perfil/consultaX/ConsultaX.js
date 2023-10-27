import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import ConsultaXUI from './ConsultaXUI';

function ConsultaX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  return <ConsultaXUI goBack={goBack} />;
}

export default ConsultaX;
