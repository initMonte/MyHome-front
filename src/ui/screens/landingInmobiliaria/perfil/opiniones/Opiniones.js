import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import OpinionesUI from './OpinionesUI';

function Opiniones() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return <OpinionesUI goBack={goBack} />;
}

export default Opiniones;
