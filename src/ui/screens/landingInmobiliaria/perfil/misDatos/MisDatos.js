import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import MisDatosUI from './MisDatosUI';

function MisDatos() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  return <MisDatosUI goBack={goBack} />;
}

export default MisDatos;
