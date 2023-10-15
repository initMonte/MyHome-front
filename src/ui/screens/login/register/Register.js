import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import RegisterUI from './RegisterUI';

function Register() {
  const navigation = useNavigation();
  /*
  const showLanding = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.DRAWER);
  };
  */
  const showLogin = () => {
    navigation.pop();
  };

  return <RegisterUI showLogin={showLogin} />;
}

export default Register;
