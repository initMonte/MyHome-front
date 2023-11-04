import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';
import InputText from '../../../../components/inputText';
import {userWS} from '../../../../../networking/api/endpoints/UserEndpoints';
import {meAction} from '../../../../../redux/slices/UserReducer';
import ProfilePhotoUploader from '../../../../components/profilePhotoUploader';

const MisDatosUI = ({goBack}) => {
  const dispatch = useDispatch();
  const {
    id,
    email,
    email2,
    name,
    surname,
    telephone,
    telephone2,
    avatarName,
    pass,
  } = useSelector(state => state.user);
  const [nameValue, setNameValue] = useState(name);
  const [telephoneValue, setTelephoneValue] = useState(telephone);
  const [telephone2Value, setTelephone2Value] = useState(telephone2);
  const [email2Value, setEmail2Value] = useState(email2);
  const [passwordValue, setPasswordValue] = useState('');
  const [newPasswordValue, setNewPasswordValue] = useState('');

  const handleNameChange = value => {
    setNameValue(value);
  };

  const handleTelephoneChange = value => {
    setTelephoneValue(value);
  };

  const handleTelephone2Change = value => {
    setTelephone2Value(value);
  };

  const handleEmail2Change = value => {
    setEmail2Value(value);
  };

  const handlePasswordChange = value => {
    setPasswordValue(value);
  };

  const handleNewPasswordChange = value => {
    setNewPasswordValue(value);
  };

  const [showPassword1, setShowPassword1] = useState(true);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [showPassword2, setShowPassword2] = useState(true);

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = () => {
    userWS
      .update(
        email,
        email2Value,
        nameValue,
        surname,
        telephoneValue,
        telephone2Value,
      )
      .then(response => {
        // Update exitoso
        console.log(response);
        dispatch(meAction(response));
        goBack();
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

  const [errorContraseña, setErrorContraseña] = useState(false);

  const checkPassword = () => {
    console.log(passwordValue);
    console.log(email);
    console.log(newPasswordValue);
    // aca quiero comparar con la contraseña, que parece que no se guarda bien pq viene así -> ''
    console.log(pass);
    if (passwordValue === pass && newPasswordValue !== '') {
      return handleSubmitPass();
    } else {
      setErrorContraseña(i18n.t('actualPassWrong'));
      return;
    }
  };

  const handleSubmitPass = () => {
    userWS
      .passwordChange(email, newPasswordValue)
      .then(response => {
        // Contraseña cambiada exitosa
        console.log(response);
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
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <View style={styles.containerRow}>
          <View style={styles.AvatarContainer}>
            {avatarName && (
              <Image source={{uri: avatarName}} style={styles.profilePhoto} />
            )}
          </View>
          <Text style={styles.textH1}>
            {surname ? name + ' ' + surname : name}
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.tittleBox}>{i18n.t('myData')}</Text>
          <View style={styles.littleBoxEmail}>
            <Text style={styles.textEmail}>
              {i18n.t('email') + ' ' + email}
            </Text>
            <Text style={styles.opcional}>{i18n.t('cantBeChanged')}</Text>
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('realStateName')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_realStateName')}
              size="L"
              changeValue={handleNameChange}
              ogValue={name}
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('phone1')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_phone')}
              keyboard="phone-pad"
              size="L"
              changeValue={handleTelephoneChange}
              ogValue={telephone}
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>
              {i18n.t('phone2')}
              <Text style={styles.opcional}>{'  ' + i18n.t('optional')}</Text>
            </Text>
            <InputText
              placeholder={i18n.t('placeholder_phone')}
              keyboard="phone-pad"
              size="L"
              changeValue={handleTelephone2Change}
              ogValue={telephone2}
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('contactEmail')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_email')}
              keyboard="email-address"
              size="L"
              changeValue={handleEmail2Change}
              ogValue={email2}
            />
          </View>

          <View style={styles.littleBox}>
            <Text style={styles.text2}>{i18n.t('profilePhoto')}</Text>
          </View>
          <ProfilePhotoUploader />

          <Button
            onPress={() => handleSubmit()}
            text={i18n.t('saveChanges')}
            color={'primary'}
            size="ML"
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.tittleBox}>{i18n.t('passChange')}</Text>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('actualPass')}</Text>
            <View style={{flexDirection: 'row'}}>
              <InputText
                placeholder={i18n.t('placeholder_password')}
                keyboard="default"
                size="CUSTOM_L"
                hideText={showPassword1}
                changeValue={handlePasswordChange}
                flex={1}
                error={errorContraseña}
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
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('newPass')}</Text>
            <View style={{flexDirection: 'row'}}>
              <InputText
                placeholder={i18n.t('placeholder_password')}
                keyboard="default"
                size="CUSTOM_L"
                hideText={showPassword2}
                changeValue={handleNewPasswordChange}
                flex={1}
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
            onPress={() => checkPassword()}
            text={i18n.t('saveChanges')}
            color={'primary'}
            size="ML"
          />
        </View>

        <Button
          onPress={() => goBack()}
          text={i18n.t('goBack')}
          color={'secondary'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.SECONDARY,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRow: {
    width: 360,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    width: 360,
    backgroundColor: Theme.colors.WHITE,
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  littleBox: {
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  littleBoxEmail: {
    width: '100%',
    marginTop: 20,
    marginLeft: 24,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tittleBox: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  text: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginLeft: 20,
  },
  textEmail: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
  },
  text2: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
  },
  opcional: {
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.S,
  },
  textH1: {
    marginBottom: 3,
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  AvatarContainer: {
    width: 77,
    height: 77,
    marginRight: 26,
  },
  profilePhoto: {
    width: 77,
    height: 77,
    borderRadius: 45,
  },
});

export default MisDatosUI;
