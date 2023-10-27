import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';
//import i18n from '../../../../assets/strings/I18n';

const VisitasProgramadasUI = ({goBack, showVisitaProgramadaX}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Pressable onPress={() => goBack()}>
        <Text>{'Estoy en VISITAS PROGRAMADAS, volver a PERFIL'}</Text>
      </Pressable>
      <Pressable onPress={() => showVisitaProgramadaX()}>
        <Text>{'Ir a Visita X'}</Text>
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

export default VisitasProgramadasUI;
