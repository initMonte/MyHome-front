import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';

import PasswordRecoveryNewPassUI from './passwordRecoveryNewPassUI';

function PasswordRecoveryNewPass() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  const showLandingInmobiliaria = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.LANDING_INMOBILIARIA);
  };

  return (
    <PasswordRecoveryNewPassUI
      goBack={goBack}
      showLandingInmobiliaria={showLandingInmobiliaria}
    />
  );
}

export default PasswordRecoveryNewPass;
