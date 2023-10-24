import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PasswordRecoveryCodeUI from './PasswordRecoveryCodeUI';

function PasswordRecoveryCode() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showPasswordRecoveryNewPass = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_NEW_PASS);
  };

  return (
    <PasswordRecoveryCodeUI
      goBack={goBack}
      showPasswordRecoveryNewPass={showPasswordRecoveryNewPass}
    />
  );
}

export default PasswordRecoveryCode;
