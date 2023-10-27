import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../../navigation/NavigatorConstant';

import VisitaProgramadaXUI from './VisitaProgramadaXUI';

function VisitaProgramadaX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  return <VisitaProgramadaXUI goBack={goBack} />;
}

export default VisitaProgramadaX;
