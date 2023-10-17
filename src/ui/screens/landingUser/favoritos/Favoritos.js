import React from 'react';
import {useNavigation} from '@react-navigation/native';
//import i18n from '../../../../assets/strings/I18n';

import FavoritosUI from './FavoritosUI';

function Favoritos() {
  const navigation = useNavigation();

  return <FavoritosUI />;
}

export default Favoritos;
