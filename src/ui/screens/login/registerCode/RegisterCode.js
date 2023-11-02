import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import RegisterCodeUI from './RegisterCodeUI';

function RegisterCode({route}) {
  const navigation = useNavigation();
  const {email} = route.params;
  console.log('email en RegisteCode antes de UI: ' + email);

  const goBack = () => {
    navigation.pop();
  };

  const showRegisterSuccessful = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.REGISTER_SUCCESSFUL);
  };

  return (
    <RegisterCodeUI
      email={email}
      goBack={goBack}
      showRegisterSuccessful={showRegisterSuccessful}
    />
  );
}

export default RegisterCode;
