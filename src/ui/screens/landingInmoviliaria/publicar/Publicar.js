//TO DO
import React from 'react';
import {useNavigation} from '@react-navigation/native';
//import i18n from '../../../../assets/strings/I18n';

import PublicarUI from './PublicarUI';

function Publicar() {
  const navigation = useNavigation();

  return <PublicarUI />;
}

export default Publicar;
