import React from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Image} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';

import {loginAction} from '../../../../redux/slices/AuthReducer';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

const LoginUI = ({showLandingUser, showLoginInmobiliaria}) => {
  const dispatch = useDispatch();

  const handleSignInGoogle = async () => {
    try {
      console.log('1');
      await GoogleSignin.hasPlayServices();
      console.log('2');
      const userInfo = await GoogleSignin.signIn();
      console.log('3');
      console.log(userInfo);
      const response = await userWS.loginGoogle(
        userInfo.user.email,
        userInfo.user.givenName,
        userInfo.user.familyName,
        userInfo.user.photo,
      );
      console.log(response);
      await dispatch(loginAction(response));
      showLandingUser();
    } catch (error) {
      console.log('Error caught:', error);
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
            handleSignInGoogle();
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
