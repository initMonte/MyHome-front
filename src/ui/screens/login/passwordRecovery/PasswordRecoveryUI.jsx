import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Image} from 'react-native-svg';
import {useDispatch} from 'react-redux';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

import {saveEmailAction} from '../../../../redux/slices/UserReducer';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

const PasswordRecoveryUI = ({goBack, showPasswordRecoveryCode}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handlePassRecovery = () => {
    userWS
      .confirmationCodeForgotPassword(email)
      .then(response => {
        // Recovery exitoso
        dispatch(saveEmailAction(response));
        showPasswordRecoveryCode();
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
        <Text style={styles.text2}>{i18n.t('inputEmail')}</Text>
        <View style={styles.container2}>
          <Text style={styles.text}>{i18n.t('email')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_email')}
            keyboard="email-address"
            changeValue={handleEmailChange}
          />
        </View>
        <Button
          text={i18n.t('continue')}
          size="M"
          color="secondary"
          onPress={() => {
            handlePassRecovery();
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
    marginLeft: 20,
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

export default PasswordRecoveryUI;
