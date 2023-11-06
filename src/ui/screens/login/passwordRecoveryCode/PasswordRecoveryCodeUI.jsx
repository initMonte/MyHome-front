import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {Image} from 'react-native-svg';

import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

const PasswordRecoveryCodeUI = ({goBack, showPasswordRecoveryNewPass}) => {
  const {email} = useSelector(state => state.user);
  const [code, setCode] = useState('');

  const handleCodeChange = value => {
    setCode(value);
  };

  const [errorCodigo, setErrorCodigo] = useState(false);

  const handleRegistrationCode = () => {
    userWS
      .verifyCode(email, code)
      .then(response => {
        // Registro exitoso
        showPasswordRecoveryNewPass();
      })
      .catch(error => {
        if (error.response) {
          // Handle error
          console.error(
            'Server responded with an error status:',
            error.response.status,
          );
          setErrorCodigo(i18n.t('codeWrong'));
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
        <Text style={styles.text}>{i18n.t('emailSentTo')}</Text>
        <Text style={styles.text2}>{email}</Text>
        <Text style={styles.text}>{i18n.t('inputCode')}</Text>
        <InputText
          placeholder={i18n.t('placeholder_code')}
          size="M"
          changeValue={handleCodeChange}
          error={errorCodigo}
        />
        <Button
          text={i18n.t('continue')}
          size="M"
          color="secondary"
          onPress={() => {
            handleRegistrationCode();
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
    margin: 20,
    marginBottom: 40,
  },
  container3: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    marginTop: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  text2: {
    marginTop: 20,
    marginBottom: 20,
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  text3: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
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

export default PasswordRecoveryCodeUI;
