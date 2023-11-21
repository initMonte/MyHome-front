import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PublicacionXUI from './PublicacionXUI';

function PublicacionX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return <PublicacionXUI goBack={goBack} />;
}

export default PublicacionX;
