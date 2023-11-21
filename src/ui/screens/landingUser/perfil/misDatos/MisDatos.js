import React from 'react';
import {useNavigation} from '@react-navigation/native';

import MisDatosUI from './MisDatosUI';

function MisDatos() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return <MisDatosUI goBack={goBack} />;
}

export default MisDatos;
