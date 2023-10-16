import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';
//import i18n from '../../../../assets/strings/I18n';

const ReservasUI = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Text>{'Estoy en RESERVAS'}</Text>
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

export default ReservasUI;
