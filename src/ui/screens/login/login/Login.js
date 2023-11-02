import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import LoginUI from './LoginUI';

function Login() {
  const {user, session} = useSelector(state => state.auth);
  console.log(' ');
  console.log('---------');
  console.log(user);
  console.log(session);
  console.log('---------');
  console.log(' ');
  const navigation = useNavigation();

  const showRecoveryPassword = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY);
  };

  const showRegister = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER);
  };

  const showLandingUser = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LANDING_USER);
  };

  const showLoginInmobiliaria = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.LOGIN_INMOBILIARIA);
  };

  return (
    <LoginUI
      showRegister={showRegister}
      showRecoveryPassword={showRecoveryPassword}
      showLandingUser={showLandingUser}
      showLoginInmobiliaria={showLoginInmobiliaria}
    />
  );
}

export default Login;
