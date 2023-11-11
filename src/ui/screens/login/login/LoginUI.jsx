import React from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Image} from 'react-native-svg';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';

const LoginUI = ({
  showRegister,
  showRecoveryPassword,
  showLandingUser,
  showLoginInmobiliaria,
}) => {
  const handleSignInUser = async () => {
    try {
      console.log('1');
      await GoogleSignin.hasPlayServices();
      console.log('2');
      const userInfo = await GoogleSignin.signIn();
      console.log('3');
      console.log(userInfo);
      //dispatch(loginAction(userInfo.));
      showLandingUser();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('4');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('5');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('6');
        // play services not available or outdated
      } else {
        console.log('7');
        // some other error happened
      }
    }
  };

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log(currentUser);
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('Usuario deslogueado, comprobar con el boton de "Ver user"');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.generalContainer}>
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
        <Button
          text={i18n.t('continueWithGoogle')}
          size="XL"
          image={<IMAGES.SVG.GOOGLE width={90} height={90} />}
          onPress={() => {
            handleSignInUser();
          }}
        />
        <Button
          text={'Ver user'}
          size="XL"
          image={<IMAGES.SVG.GOOGLE width={90} height={90} />}
          onPress={() => {
            getCurrentUser();
          }}
        />
        <Button
          text={'logout'}
          size="XL"
          image={<IMAGES.SVG.GOOGLE width={90} height={90} />}
          onPress={() => {
            signOut();
          }}
        />
        <Button
          text={i18n.t('stateAccount')}
          size="XL"
          color="secondary"
          image={<IMAGES.SVG.GROUP width={60} height={60} />}
          onPress={() => {
            showLoginInmobiliaria();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 40,
    marginBottom: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  textH1: {
    margin: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.XL,
    fontWeight: Theme.fonts.BOLD,
  },
});

export default LoginUI;
