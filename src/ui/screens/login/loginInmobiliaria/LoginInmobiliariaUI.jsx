import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Image} from 'react-native-svg';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

import {loginAction} from '../../../../redux/slices/AuthReducer';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

const LoginInmobiliariaUI = ({
  goBack,
  showRegister,
  showRecoveryPassword,
  showLandingInmobiliaria,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [errorContraseña, setErrorContraseña] = useState(false);

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
          setErrorContraseña(i18n.t('passWrong'));
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
        <Text style={styles.textH1}>{i18n.t('hello')}</Text>
        <IMAGES.SVG.LOGO width={380} height={230} />
        <View style={styles.container2}>
          <Text style={styles.text}>{i18n.t('email')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_email')}
            keyboard="email-address"
            changeValue={handleEmailChange}
          />
          <Text style={styles.text}>{i18n.t('pass')}</Text>
          <View style={{flexDirection: 'row'}}>
            <InputText
              placeholder={i18n.t('placeholder_password')}
              hideText={showPassword}
              changeValue={handlePasswordChange}
              contraseña={true}
              error={errorContraseña}
              flex={1}
            />
            {showPassword 
              ?
              <IMAGES.SVG.EYE_CLOSE width={20} height={20} onPress={handleShowPassword} style={{marginTop: 25}}/>
              :
              <IMAGES.SVG.EYE_OPEN width={20} height={20} onPress={handleShowPassword} style={{marginTop: 25}}/>
            }
            
          </View>
          <Pressable onPress={showRecoveryPassword}>
            <Text style={styles.presable1}>{i18n.t('forgotPass')}</Text>
          </Pressable>
        </View>
        <Button
          text={i18n.t('login')}
          size="M"
          color="secondary"
          onPress={() => {
            handleLogin();
          }}
        />
        <View style={styles.container3}>
          <Text style={styles.text}>{i18n.t('noAccount')}</Text>
          <Pressable onPress={showRegister}>
            <Text style={styles.pressable2}>{i18n.t('register')}</Text>
          </Pressable>
        </View>
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
    margin: 20,
  },
  container3: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  textH1: {
    margin: 20,
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.XL,
    fontWeight: Theme.fonts.BOLD,
  },
  presable1: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.SEMIBOLD,
  },
  pressable2: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    textDecorationLine: 'underline',
  },
});

export default LoginInmobiliariaUI;
