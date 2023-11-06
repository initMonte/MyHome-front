import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';
import Theme from '../../../../styles/Theme';
import IMAGES from '../../../../assets/images/images';
//import i18n from '../../../../assets/strings/I18n';

const HomeUI = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <IMAGES.SVG.LOGO width={380} height={230} />
      <Text style={styles.text}>{'Pagina en construccion'}</Text>
      <Text style={styles.text}>{'Estoy en HOME'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.WHITE,
  },
  text: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.L,
  },
});

export default HomeUI;
