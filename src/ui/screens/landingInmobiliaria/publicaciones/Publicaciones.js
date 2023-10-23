//TO DO
import React from 'react';
import {useNavigation} from '@react-navigation/native';
//import i18n from '../../../../assets/strings/I18n';

import PublicacionesUI from './PublicacionesUI';

function Publicaciones() {
  const navigation = useNavigation();

  return <PublicacionesUI />;
}

export default Publicaciones;
