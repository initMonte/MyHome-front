import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import EditarPublicacionXUI from './EditarPublicacionXUI';

function EditarPublicacionX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return <EditarPublicacionXUI goBack={goBack} />;
}

export default EditarPublicacionX;
