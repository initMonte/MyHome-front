import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PerfilUI from './PerfilUI';

function Perfil() {
  const navigation = useNavigation();

  const showLogin = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LOGIN);
  };

  return <PerfilUI showLogin={showLogin} />;
}

export default Perfil;
