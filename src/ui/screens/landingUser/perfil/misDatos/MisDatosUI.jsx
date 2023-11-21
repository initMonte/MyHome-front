import React, {useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
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
  const [surnameValue, setSurnameValue] = useState(surname);
  const [telephoneValue, setTelephoneValue] = useState(telephone);
  const [telephone2Value, setTelephone2Value] = useState(telephone2);
  const [email2Value, setEmail2Value] = useState(email2);
  const [selectedImageUri, setSelectedImageUri] = useState(null);

  const [errorTelephoneValue, setErrorTelephoneValue] = useState(false);
  const inputRefTelephoneValue = useRef();

  const [errorTelephone2Value, setErrorTelephone2Value] = useState(false);
  const inputRefTelephone2Value = useRef();

  const handleFocus = ref => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const handleNameChange = value => {
    setNameValue(value);
  };

  const handleSurnameChange = value => {
    setSurnameValue(value);
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

  const handleImageSelection = uri => {
    setSelectedImageUri(uri);
  };

  const handleSubmit = () => {
    if (isNaN(telephoneValue)) {
      setErrorTelephoneValue(i18n.t('invalidNumber'));
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
            <Text style={styles.text}>{i18n.t('name')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_name')}
              size="L"
              changeValue={handleNameChange}
              ogValue={name}
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('surname')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_surname')}
              size="L"
              changeValue={handleSurnameChange}
              ogValue={surname}
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

          <Button
            onPress={() => handleSubmit()}
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
});

export default MisDatosUI;
