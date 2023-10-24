import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import RegisterUI from './RegisterUI';

function Register() {
  const navigation = useNavigation();

  const showLoginInmobiliaria = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.LOGIN_INMOBILIARIA);
  };

  const showLandingInmobiliaria = () => {
    navigation.push(NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA);
  };

  return (
    <RegisterUI 
      showLoginInmobiliaria={showLoginInmobiliaria}
      showLandingInmobiliaria={showLandingInmobiliaria}
    /> 
  );
}

export default Register;
