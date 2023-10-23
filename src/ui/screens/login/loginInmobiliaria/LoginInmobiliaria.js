import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import LoginInmobiliariaUI from './LoginInmobiliariaUI';

function LoginInmobiliaria() {
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

  const showLandingInmobiliaria = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA);
  };

  return (
    <LoginInmobiliariaUI
      goBack={goBack}
      showRegister={showRegister}
      showRecoveryPassword={showRecoveryPassword}
      showLandingInmobiliaria={showLandingInmobiliaria}
    />
  );
}

export default LoginInmobiliaria;
