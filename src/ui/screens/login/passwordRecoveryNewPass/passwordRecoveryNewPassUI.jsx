import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Image} from 'react-native-svg';

import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';
import {loginAction} from '../../../../redux/slices/AuthReducer';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

const PasswordRecoveryNewPassUI = ({goBack, showLandingInmobiliaria}) => {
  const {email} = useSelector(state => state.user);
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordValid, setpasswordValid] = useState('');
  const dispatch = useDispatch();

  const checkPassword = () => {
    if (password !== '' && password === passwordRepeat) {
      setpasswordValid(true);
      return handleNewPass();
    } else {
      setpasswordValid(false);
      setErrorContraseña(i18n.t('newPassWrong'));
      return;
    }
  };

  const [errorContraseña, setErrorContraseña] = useState(false);

  const [showPassword1, setShowPassword1] = useState(true);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [showPassword2, setShowPassword2] = useState(true);

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleNewPass = () => {
    userWS
      .passwordChange(email, password)
      .then(response => {
        // New pass exitoso
        handleLogin();
      })
      .catch(error => {
        if (error.response) {
          // Handle error
          console.error(
            'Server responded with an error status:',
            error.response.status,
          );
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          // Handle error
          console.error('No response received:', error.request);
        } else {
          // Handle error
          console.error('Error setting up the request:', error.message);
        }
      });
  };

  const handleLogin = () => {
    userWS
      .login(email, password)
      .then(response => {
        // Login exitoso
        console.log(response);
        dispatch(loginAction(response));
        showLandingInmobiliaria();
      })
      .catch(error => {
        if (error.response) {
          // Handle error
          console.error(
            'Server responded with an error status:',
            error.response.status,
          );
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          // Handle error
          console.error('No response received:', error.request);
        } else {
          // Handle error
          console.error('Error setting up the request:', error.message);
        }
      });
  };

  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container1}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <Text style={styles.textH1}>{i18n.t('passRecovery')}</Text>
        <IMAGES.SVG.LOGO width={380} height={230} />
        <Text style={styles.text2}>{i18n.t('passChange')}</Text>
        <View style={styles.container2}>
          <Text style={styles.text}>{i18n.t('newPass')}</Text>
          <View style={{flexDirection: 'row'}}>
            <InputText
              placeholder={i18n.t('placeholder_password')}
              hideText={showPassword1}
              changeValue={setPassword}
              contraseña={true}
              flex={1}
            />
            {showPassword1 ? (
              <IMAGES.SVG.EYE_CLOSE
                width={20}
                height={20}
                onPress={handleShowPassword1}
                style={{marginTop: 25}}
              />
            ) : (
              <IMAGES.SVG.EYE_OPEN
                width={20}
                height={20}
                onPress={handleShowPassword1}
                style={{marginTop: 25}}
              />
            )}
          </View>
          <Text style={styles.text}>{i18n.t('newPass2')}</Text>
          <View style={{flexDirection: 'row'}}>
            <InputText
              placeholder={i18n.t('placeholder_password')}
              hideText={showPassword2}
              changeValue={setPasswordRepeat}
              contraseña={true}
              flex={1}
              error={errorContraseña}
            />
            {showPassword2 ? (
              <IMAGES.SVG.EYE_CLOSE
                width={20}
                height={20}
                onPress={handleShowPassword2}
                style={{marginTop: 25}}
              />
            ) : (
              <IMAGES.SVG.EYE_OPEN
                width={20}
                height={20}
                onPress={handleShowPassword2}
                style={{marginTop: 25}}
              />
            )}
          </View>
        </View>
        <Button
          text={i18n.t('confirm')}
          size="M"
          color="secondary"
          onPress={() => {
            checkPassword();
          }}
        />
        <Button
          text={i18n.t('goBack')}
          size="M"
          color="secondaryTransparent"
          onPress={() => {
            goBack();
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
  container1: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    margin: 16,
    marginBottom: 20,
  },
  container3: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    marginLeft: 20,
    marginTop: 10,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  text2: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  textH1: {
    marginBottom: 20,
    textAlign: 'center',
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.XL,
    fontWeight: Theme.fonts.BOLD,
  },
});

export default PasswordRecoveryNewPassUI;
