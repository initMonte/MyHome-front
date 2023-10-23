import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import PasswordRecoveryCodeUI from './PasswordRecoveryCodeUI';

function PasswordRecoveryCode() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showPasswordRecoveryCode = () => {
    navigation.push(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_CODE);
  };

  return (
    <PasswordRecoveryCodeUI
      goBack={goBack}
      showPasswordRecoveryCode={showPasswordRecoveryCode}
    />
  );
}

export default PasswordRecoveryCode;
