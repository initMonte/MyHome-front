import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';

const VisitaProgramadaXUI = ({goBack}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <Pressable onPress={() => goBack()}>
        <Text>
          {'Estoy en VISITA PROGRAMADA X, volver a VISITAS PROGRAMADAS'}
        </Text>
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

export default VisitaProgramadaXUI;
