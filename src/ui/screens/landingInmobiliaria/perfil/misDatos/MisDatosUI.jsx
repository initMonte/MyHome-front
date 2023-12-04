import React, {useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';
import InputText from '../../../../components/inputText';
import {userWS} from '../../../../../networking/api/endpoints/UserEndpoints';
import {
  meAction,
  saveEmailAction,
} from '../../../../../redux/slices/UserReducer';
import ProfilePhotoUploader from '../../../../components/profilePhotoUploader';

const MisDatosUI = ({goBack}) => {
  const dispatch = useDispatch();
  const {id, email, email2, name, surname, telephone, telephone2, avatarName} =
    useSelector(state => state.user);
  const [nameValue, setNameValue] = useState(name);
  const [telephoneValue, setTelephoneValue] = useState(telephone);
  const [telephone2Value, setTelephone2Value] = useState(telephone2);
  const [email2Value, setEmail2Value] = useState(email2);
  const [passwordValue, setPasswordValue] = useState('');
  const [newPasswordValue, setNewPasswordValue] = useState('');
  const [selectedImageUri, setSelectedImageUri] = useState(null);

  const [errorNameeValue, setErrorNameValue] = useState(false);
  const inputRefNameValue = useRef();

  const [errorTelephoneValue, setErrorTelephoneValue] = useState(false);
  const inputRefTelephoneValue = useRef();

  const [errorTelephone2Value, setErrorTelephone2Value] = useState(false);
  const inputRefTelephone2Value = useRef();

  const [photoError, setPhotoError] = useState(false);

  const handleFocus = ref => {
    if (ref.current) {
      ref.current.focus();
    }
  };

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

  const handleImageSelection = uri => {
    setSelectedImageUri(uri);
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
    if (!nameValue) {
      setErrorNameValue(i18n.t('cantBeEmpty'));
      handleFocus(inputRefNameValue);
      return false;
    } else {
      setErrorNameValue(false);
    }

    if (isNaN(telephoneValue)) {
      setErrorTelephoneValue(i18n.t('invalidNumber'));
      handleFocus(inputRefTelephoneValue);
      return false;
    } else if (!telephoneValue) {
      setErrorTelephoneValue(i18n.t('cantBeEmpty'));
      handleFocus(inputRefTelephoneValue);
      return false;
    } else {
      setErrorTelephoneValue(false);
    }

    if (isNaN(telephone2Value)) {
      setErrorTelephone2Value(i18n.t('invalidNumber'));
      handleFocus(inputRefTelephone2Value);
      return false;
    } else {
      setErrorTelephone2Value(false);
    }

    if (!selectedImageUri) {
      setPhotoError(true);
      return false;
    } else {
      setPhotoError(false);
    }

    userWS
      .update(
        email,
        email2Value,
        nameValue,
        surname,
        telephoneValue,
        telephone2Value,
        selectedImageUri,
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
          showToastWithGravityAndOffset2();
        } else {
          // Handle error
          console.error('Error setting up the request:', error.message);
        }
      });
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      i18n.t('passwordChanged'),
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      80,
    );
  };

  const showToastWithGravityAndOffset2 = () => {
    ToastAndroid.showWithGravityAndOffset(
      i18n.t('connection'),
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      80,
    );
  };

  const [showCodeBox, setShowCodeBox] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handlePassRecovery = () => {
    userWS
      .confirmationCodeForgotPassword(email)
      .then(response => {
        // Recovery exitoso
        console.log(response);
        dispatch(saveEmailAction(response));
        setShowCodeBox(true);
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

  const [code, setCode] = useState('');
  console.log(email);

  const handleCodeChange = value => {
    setCode(value);
  };

  const [errorCodigo, setErrorCodigo] = useState(false);

  const handleRegistrationCode = () => {
    userWS
      .verifyCode(email, code)
      .then(response => {
        // Registro exitoso
        setShowCodeBox(false);
        setShowPass(true);
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

  const checkPassword = () => {
    if (passwordValue !== '' && passwordValue === newPasswordValue) {
      return handleSubmitPass();
    } else {
      setErrorContraseña(i18n.t('newPassWrong'));
      return;
    }
  };

  const [errorContraseña, setErrorContraseña] = useState(false);

  const handleSubmitPass = () => {
    userWS
      .passwordChange(email, newPasswordValue)
      .then(response => {
        setShowCodeBox(false);
        setShowPass(false);
        showToastWithGravityAndOffset();
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
              error={errorNameeValue}
              innerRef={inputRefNameValue}
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
              error={errorTelephoneValue}
              innerRef={inputRefTelephoneValue}
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
              error={errorTelephone2Value}
              innerRef={inputRefTelephone2Value}
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
          <ProfilePhotoUploader
            imageSource={selectedImageUri}
            onImageSelected={handleImageSelection}
          />
          {photoError ? (
            <Text style={styles.errorPhoto}>{i18n.t('mustUploadPhoto')}</Text>
          ) : null}

          <Button
            onPress={() => handleSubmit()}
            text={i18n.t('saveChanges')}
            color={'primary'}
            size="ML"
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.tittleBox}>{i18n.t('passChange')}</Text>

          {!showCodeBox && !showPass ? (
            <View style={styles.littleBoxEmail}>
              <Text style={styles.text333}>{i18n.t('emailWillSendTo')}</Text>
              <Text style={styles.text3333}>{email}</Text>
            </View>
          ) : (
            <></>
          )}

          {showCodeBox ? (
            <View style={styles.littleBoxEmail}>
              <Text style={styles.text222}>{i18n.t('emailSentTo')}</Text>
              <Text style={styles.text2222}>{email}</Text>
              <Text style={styles.text22}>{i18n.t('inputCode')}</Text>
              <InputText
                placeholder={i18n.t('placeholder_code')}
                size="M"
                changeValue={handleCodeChange}
                error={errorCodigo}
              />
            </View>
          ) : (
            <></>
          )}

          {showPass && !showCodeBox ? (
            <View>
              <View style={styles.littleBox}>
                <Text style={styles.text}>{i18n.t('newPass')}</Text>
                <View style={{flexDirection: 'row'}}>
                  <InputText
                    placeholder={i18n.t('placeholder_password')}
                    keyboard="default"
                    size="CUSTOM_L"
                    hideText={showPassword1}
                    changeValue={handlePasswordChange}
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
              </View>
              <View style={styles.littleBox}>
                <Text style={styles.text}>{i18n.t('newPass2')}</Text>

                <View style={{flexDirection: 'row'}}>
                  <InputText
                    placeholder={i18n.t('placeholder_password')}
                    keyboard="default"
                    size="CUSTOM_L"
                    hideText={showPassword2}
                    changeValue={handleNewPasswordChange}
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
            </View>
          ) : (
            <></>
          )}

          {!showCodeBox && !showPass ? (
            <Button
              onPress={() => handlePassRecovery()}
              text={i18n.t('sendCode')}
              color={'primary'}
              size="ML"
            />
          ) : (
            <></>
          )}

          {showPass ? (
            <Button
              onPress={() => checkPassword()}
              text={i18n.t('saveChanges')}
              color={'primary'}
              size="ML"
            />
          ) : (
            <></>
          )}

          {showCodeBox ? (
            <Button
              onPress={() => handleRegistrationCode()}
              text={i18n.t('continue')}
              color={'primary'}
              size="ML"
            />
          ) : (
            <></>
          )}
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
  text22: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 20,
    marginLeft: 12,
  },
  text222: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginLeft: 12,
  },
  text2222: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 10,
    marginLeft: 60,
  },
  text333: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginLeft: 35,
  },
  text3333: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 60,
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
  errorPhoto: {
    color: 'red',
  },
});

export default MisDatosUI;
