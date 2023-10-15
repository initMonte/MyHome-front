import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NavigatorConstant from './NavigatorConstant';
import LoginStackNavigator from './LoginStackNavigator';

//import Start from '../ui/screens/start/Start';

const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigatorConstant.NAVIGATOR.LoginStackNavigator}>
        <Stack.Screen
          name={NavigatorConstant.NAVIGATOR.LOGIN}
          component={LoginStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;

/*
      <Stack.Screen
        name={NavigatorConstant.NAVIGATOR.START}
        component={Start}
      />
*/
