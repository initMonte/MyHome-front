import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import LoginUI from './LoginUI';

function Login() {
  const navigation = useNavigation();
  /*
  const showLanding = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.DRAWER);
  };
  */
  const showRecoveryPassword = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY);
  };

  const showRegister = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER);
  };

  return (
    <LoginUI
      showRegister={showRegister}
      showRecoveryPassword={showRecoveryPassword}
    />
  );
}

export default Login;
