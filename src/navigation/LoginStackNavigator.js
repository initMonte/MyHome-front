import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../ui/screens/login/login/Login';
import LoginInmobiliaria from '../ui/screens/login/loginInmobiliaria/LoginInmobiliaria';
import Register from '../ui/screens/login/register/Register';
import PasswordRecovery from '../ui/screens/login/passwordRecovery/PasswordRecovery';
import PasswordRecoveryCode from '../ui/screens/login/passwordRecoveryCode/PasswordRecoveryCode';
import PasswordRecoveryNewPass from '../ui/screens/login/passwordRecoveryNewPass/passwordRecoveryNewPass';
import RegisterCode from '../ui/screens/login/registerCode/RegisterCode';
import RegisterSuccessful from '../ui/screens/login/registerSuccessful/RegisterSuccessful';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function LoginNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.LOGIN_STACK.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.LOGIN}
        component={Login}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY}
        component={PasswordRecovery}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_CODE}
        component={PasswordRecoveryCode}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY_NEW_PASS}
        component={PasswordRecoveryNewPass}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.REGISTER}
        component={Register}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.LOGIN_INMOBILIARIA}
        component={LoginInmobiliaria}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.REGISTER_CODE}
        component={RegisterCode}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.REGISTER_SUCCESSFUL}
        component={RegisterSuccessful}
      />
    </Stack.Navigator>
  );
}

export default LoginNavigator;
