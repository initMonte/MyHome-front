import React from 'react';
import {useNavigation} from '@react-navigation/native';

import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import HomeUI from './HomeUI';

function Home() {
  const navigation = useNavigation();

  const showFiltrosBusqueda = () => {
    navigation.push(NavigatorConstant.USER_HOME_STACK.FILTROS_BUSQUEDA);
  };

  const showPublicacionX = () => {
    navigation.push(NavigatorConstant.USER_HOME_STACK.PUBLICACION_X);
  };

  return (
    <HomeUI
      showFiltrosBusqueda={showFiltrosBusqueda}
      showPublicacionX={showPublicacionX}
    />
  );
}

export default Home;
