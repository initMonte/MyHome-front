import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import RegisterUI from './RegisterUI';

function Register() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showRegisterCode = email => {
    console.log('email en register.js: ' + email);
    navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER_CODE, {
      email: email,
    });
  };

  return <RegisterUI goBack={goBack} showRegisterCode={showRegisterCode} />;
}

export default Register;
