import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';
import i18n from '../../../../assets/strings/I18n';

import Theme from '../../../../styles/Theme';

const EditarPublicacionXUI = ({goBack}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Pressable onPress={() => goBack()}>
        <Text>{'Estoy en EDITAR, volver'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.SECONDARY,
  },
});

export default EditarPublicacionXUI;
