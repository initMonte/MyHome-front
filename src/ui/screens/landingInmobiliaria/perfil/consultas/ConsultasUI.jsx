import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';

const ConsultasUI = ({goBack, showConsultaX}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Pressable onPress={() => goBack()}>
        <Text>{'Estoy en CONSULTAS, volver a PERFIL'}</Text>
      </Pressable>
      <Pressable onPress={() => showConsultaX()}>
        <Text>{'Ir a Consulta X'}</Text>
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

export default ConsultasUI;
