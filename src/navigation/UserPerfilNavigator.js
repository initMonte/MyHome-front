import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Perfil from '../ui/screens/landingUser/perfil/Perfil';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function UserPefilNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={NavigatorConstant.USER_PERFIL_STACK.PERFIL}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.USER_PERFIL_STACK.PERFIL}
        component={Perfil}
      />
    </Stack.Navigator>
  );
}

export default UserPefilNavigator;
