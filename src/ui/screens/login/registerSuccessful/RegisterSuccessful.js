import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import RegisterSuccessfulUI from './RegisterSuccessfulUI';

function RegisterSuccessful() {
  const navigation = useNavigation();

  const showLandingInmobiliaria = () => {
    navigation.push(NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA);
  };

  return (
    <RegisterSuccessfulUI showLandingInmobiliaria={showLandingInmobiliaria} />
  );
}

export default RegisterSuccessful;
