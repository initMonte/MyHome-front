import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PublicarUI from './PublicarUI';

function Publicar() {
  const navigation = useNavigation();

  const goHome = () => {
    navigation.push(NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA);
  };

  return <PublicarUI goHome={goHome} />;
}

export default Publicar;
