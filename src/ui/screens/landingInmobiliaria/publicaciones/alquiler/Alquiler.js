import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import AlquilerUI from './AlquilerUI';

function Alquiler() {
  const navigation = useNavigation();

  const showLogin = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN);
  };

  return <AlquilerUI showLogin={showLogin} />;
}

export default Alquiler;
