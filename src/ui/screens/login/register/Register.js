import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import RegisterUI from './RegisterUI';

function Register() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showRegisterCode = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER_CODE);
  };

  return (
    <RegisterUI 
      goBack={goBack}
      showRegisterCode={showRegisterCode}
    /> 
  );
}

export default Register;
