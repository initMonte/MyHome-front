import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Favoritos from '../ui/screens/landingUser/favoritos/Favoritos';
import UserPublicacionXNavigator from './UserPublicacionXNavigator';

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
        options={{
          headerShown: true,
          headerTitle: 'Favoritos',
          headerTitleAlign: 'center',
        }}
        name={NavigatorConstant.USER_FAVORITOS_STACK.FAVORITOS_TOP_TAB}
        component={Favoritos}
      />
      <Stack.Screen
        name={NavigatorConstant.USER_FAVORITOS_STACK.PUBLICACION_X}
        component={UserPublicacionXNavigator}
      />
    </Stack.Navigator>
  );
}

export default UserFavoritosNavigator;
