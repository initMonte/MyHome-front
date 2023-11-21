import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Favoritos from '../ui/screens/landingUser/favoritos/Favoritos';
import PublicacionX from '../ui/screens/landingUser/publicacionX/PublicacionX';

import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
function UserFavoritosNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={
        NavigatorConstant.USER_FAVORITOS_STACK.FAVORITOS_TOP_TAB
      }
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigatorConstant.USER_FAVORITOS_STACK.FAVORITOS_TOP_TAB}
        component={Favoritos}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_FAVORITOS_STACK.PUBLICACION_X}
        component={PublicacionX}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default UserFavoritosNavigator;
