import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';
//import i18n from '../../../../assets/strings/I18n';

const RegisterUI = ({showLogin}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Pressable onPress={() => showLogin()}>
        <Text>{'Estoy en PERFIL, volver a Login'}</Text>
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

export default RegisterUI;
