import React from 'react';
import {View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';
import {Image} from 'react-native-svg';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';

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
      <Text style={styles.textH1}>{i18n.t('welcome')}</Text>
      <IMAGES.SVG.LOGO width={380} height={230} />
      <Text style={styles.text}>{i18n.t('loginMode')}</Text>
      <Pressable onPress={() => showRecoveryPassword()}>
        <Text style={styles.text}>{'Push - Show Recovery Password'}</Text>
      </Pressable>
      <Pressable onPress={() => showRegister()}>
        <Text style={styles.text}>{'Push - Show Register'}</Text>
      </Pressable>
      <View alignItems="center">
        <Button
          text={i18n.t('continueWithGoogle')}
          size="XL"
          image={<IMAGES.SVG.GOOGLE width={90} height={90} />}
          onPress={() => {
            showLandingUser();
          }}
        />
        <Button
          text={i18n.t('stateAccount')}
          size="XL"
          color="secondary"
          image={<IMAGES.SVG.GROUP width={60} height={60} />}
          onPress={() => {
            showLandingInmoviliaria();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.WHITE,
  },
  text: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  textH1: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.XL,
    fontWeight: Theme.fonts.BOLD,
  },
});

export default LoginUI;
