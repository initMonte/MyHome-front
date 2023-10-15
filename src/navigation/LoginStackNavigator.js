import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from '../ui/screens/login/register/Register';
import Login from '../ui/screens/login/login/Login';
import PasswordRecovery from '../ui/screens/login/passwordRecovery/PasswordRecovery';

import i18n from '../assets/strings/I18n';
import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function LoginNavigator() {
  return (
    <Stack.Navigator initialRouteName={NavigatorConstant.LOGIN_STACK.LOGIN}>
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.LOGIN}
        component={Login}
        options={{title: i18n.t('appName')}}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY}
        component={PasswordRecovery}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.REGISTER}
        component={Register}
      />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
