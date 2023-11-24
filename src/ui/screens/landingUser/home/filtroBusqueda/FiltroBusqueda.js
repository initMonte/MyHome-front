import React from 'react';
import {useNavigation} from '@react-navigation/native';

import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import FiltroBusquedaUI from './FiltroBusquedaUI';

function FiltroBusqueda() {
  const navigation = useNavigation();

  const goHome = () => {
    navigation.replace(NavigatorConstant.USER_HOME_STACK.HOME);
  };

  return <FiltroBusquedaUI goHome={goHome} />;
}

export default FiltroBusqueda;
