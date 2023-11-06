import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {Image} from 'react-native-svg';

import {saveLoginInfoAction} from '../../../../redux/slices/UserReducer';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

const RegisterUI = ({goBack, showRegisterCode}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [telephone2, setTelephone2] = useState('');
  const [email2, setEmail2] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const handleNameChange = value => {
    setName(value);
  };

  const handleTelephoneChange = value => {
    setTelephone(value);
  };

  const handleTelephone2Change = value => {
    setTelephone2(value);
  };

  const handleEmail2Change = value => {
    setEmail2(value);
  };

  const handleError = value => {
    setError(value);
  }

  const handleRegistration = () => {
    userWS
      .register(email, password, name, telephone, telephone2, email2)
      .then(response => {
        // Registro exitoso
        dispatch(saveLoginInfoAction({email, password}));
        showRegisterCode();
      })
      .catch(error => {
        if (error.response.data.message === 'User already registered') {
          handleError(i18n.t('errors.userAlreadyRegister'));
        } else if (error.response) {
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
        <Text style={styles.textH1}>{i18n.t('realStateRegister')}</Text>
        <IMAGES.SVG.LOGO width={380} height={230} />
        <View style={styles.container2}>
          <Text style={styles.text}>
            {i18n.t('email') + ' '}
            <Text style={styles.textOptional}>
              {i18n.t('emailConfirmationNote')}
            </Text>
          </Text>
          <InputText
            placeholder={i18n.t('placeholder_email')}
            keyboard="email-address"
            changeValue={handleEmailChange}
          />
          <Text style={styles.text}>{i18n.t('pass')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_password')}
            hideText={true}
            changeValue={handlePasswordChange}
          />
          <Text style={styles.text}>{i18n.t('realStateName')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_realStateName')}
            changeValue={handleNameChange}
          />
          <Text style={styles.text}>{i18n.t('phone1')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_phone')}
            keyboard="phone-pad"
            changeValue={handleTelephoneChange}
          />
          <Text style={styles.text}>
            {i18n.t('phone2') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
          <InputText
            placeholder={i18n.t('placeholder_phone')}
            keyboard="phone-pad"
            changeValue={handleTelephone2Change}
          />
          <Text style={styles.text}>
            {i18n.t('contactEmail') + ' '}
            <Text style={styles.textOptional}>{i18n.t('canBeRepeted')}</Text>
          </Text>
          <InputText
            placeholder={i18n.t('placeholder_email')}
            keyboard="email-address"
            changeValue={handleEmail2Change}
          />
        </View>
        <Button
          text={i18n.t('register')}
          size="M"
          color="secondary"
          onPress={handleRegistration}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
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
  textOptional: {
    marginLeft: 10,
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.LIGHT,
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
  error: {
    color: 'red',
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.LIGHT,
  },
});

export default RegisterUI;
