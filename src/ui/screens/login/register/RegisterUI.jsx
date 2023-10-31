import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-svg';

import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

const RegisterUI = ({goBack, showRegisterCode}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');

  const handleNameChange = value => {
    setName(value);
  };

  const handleSurnameChange = value => {
    setSurname(value);
  };

  const handleEmailChange = value => {
    setEmail(value);
  };

  const handleTelephoneChange = value => {
    setTelephone(value);
  };

  const handlePasswordChange = value => {
    setPassword(value);
  };

  const handleNickNameChange = value => {
    setNickName(value);
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
            changeValue={handleSurnameChange}
          />
          <Text style={styles.text}>
            {i18n.t('contactEmail') + ' '}
            <Text style={styles.textOptional}>{i18n.t('canBeRepeted')}</Text>
          </Text>
          <InputText
            placeholder={i18n.t('placeholder_email')}
            keyboard="email-address"
            changeValue={handleNickNameChange}
          />
        </View>
        <Button
          text={i18n.t('register')}
          size="M"
          color="secondary"
          onPress={() => {
            userWS
              .register(name, surname, email, telephone, password, nickName)
              .catch(error => {
                if (error.response) {
                  // The request was made, and the server responded with a status code that falls out of the range of 2xx
                  console.error(
                    'Server responded with an error status:',
                    error.response.status,
                  );
                  console.error('Response data:', error.response.data);
                  // You can handle the specific error here, e.g., show an error message to the user.
                } else if (error.request) {
                  // The request was made, but no response was received
                  console.error('No response received:', error.request);
                  // Handle as needed
                } else {
                  // Something happened in setting up the request
                  console.error('Error setting up the request:', error.message);
                  // Handle as needed
                }
              });
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
});

export default RegisterUI;
