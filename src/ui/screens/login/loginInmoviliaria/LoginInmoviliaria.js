import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import LoginInmoviliariaUI from './LoginInmoviliariaUI';

function LoginInmoviliaria() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showRecoveryPassword = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY);
  };

  const showRegister = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER);
  };

  const showLandingInmoviliaria = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LANDING_INMOVILIARIA);
  };

  return (
    <LoginInmoviliariaUI
      goBack={goBack}
      showRegister={showRegister}
      showRecoveryPassword={showRecoveryPassword}
      showLandingInmoviliaria={showLandingInmoviliaria}
    />
  );
}

export default LoginInmoviliaria;
