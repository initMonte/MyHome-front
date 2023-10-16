import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';
//import i18n from '../../../../assets/strings/I18n';

const LoginUI = ({
  showRegister,
  showRecoveryPassword,
  showLandingUser,
  showLandingInmoviliaria,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Pressable onPress={() => showRecoveryPassword()}>
        <Text>{'Push - Show Recovery Password'}</Text>
      </Pressable>
      <Pressable onPress={() => showRegister()}>
        <Text>{'Push - Show Register'}</Text>
      </Pressable>
      <Pressable onPress={() => showLandingUser()}>
        <Text>{'Replace - Show User'}</Text>
      </Pressable>
      <Pressable onPress={() => showLandingInmoviliaria()}>
        <Text>{'Replace - Show Inmoviliaria'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});

export default LoginUI;
