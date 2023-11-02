import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import RegisterSuccessfulUI from './RegisterSuccessfulUI';

function RegisterSuccessful() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showLandingInmobiliaria = () => {
    navigation.push(NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA);
  };

  return (
    <RegisterSuccessfulUI
      goBack={goBack}
      showLandingInmobiliaria={showLandingInmobiliaria}
    />
  );
}

export default RegisterSuccessful;
