import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import PasswordRecoveryUI from './PasswordRecoveryUI';

function PasswordRecovery() {
  const navigation = useNavigation();
  /*
  const showLanding = () => {
    navigation.replace(NavigatorConstant.NAVIGATOR.DRAWER);
  };
  */
  const showLogin = () => {
    navigation.pop();
  };

  return <PasswordRecoveryUI showLogin={showLogin} />;
}

export default PasswordRecovery;
