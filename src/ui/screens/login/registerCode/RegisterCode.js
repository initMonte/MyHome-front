import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import RegisterCodeUI from './RegisterCodeUI';

function RegisterCode() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showRegisterSuccessful = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER_SUCCESSFUL);
  };

  return (
    <RegisterCodeUI
      goBack={goBack}
      showRegisterSuccessful={showRegisterSuccessful}
    />
  );
}

export default RegisterCode;