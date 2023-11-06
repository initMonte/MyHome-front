import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import EditarPublicacionXUI from './EditarPublicacionXUI';

function EditarPublicacionX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA);
  };

  return <EditarPublicacionXUI goBack={goBack} goHome={goHome} />;
}

export default EditarPublicacionX;
