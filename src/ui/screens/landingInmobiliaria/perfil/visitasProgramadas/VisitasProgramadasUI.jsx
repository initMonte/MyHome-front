import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ToastAndroid
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';
import {contactWS} from '../../../../../networking/api/endpoints/ContactEndpoints';
import {saveContactAction} from '../../../../../redux/slices/ContactReducer';
import {estatesWS} from '../../../../../networking/api/endpoints/EstatesEndpoints';
import {userWS} from '../../../../../networking/api/endpoints/UserEndpoints';
import {
  saveEstateAction,
  saveUserEstateAction,
} from '../../../../../redux/slices/EstateReducer';

const VisitasProgramadasUI = ({goBack, showVisitaProgramadaX}) => {
  const dispatch = useDispatch();
  const {name, avatarName} = useSelector(state => state.user);
  const [contacts, setContacts] = useState();
  const [contactsLen, setContactsLen] = useState();

  useEffect(() => {
    contactWS
      .getContactsVisits()
      .then(response => {
        // Get exitoso
        console.log(response.data.contacts);
        setContacts(response.data.contacts);
        setContactsLen(response.data.contacts.length);
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
          showToastWithGravityAndOffset();
        } else {
          // Handle error
          console.error('Error setting up the request:', error.message);
        }
      });
  }, []);

  const handleContactClick = async contactItem => {
    dispatch(saveContactAction(contactItem));
    const estateResponse = await estatesWS.getEstate(contactItem.estate);
    dispatch(saveEstateAction(estateResponse.data.estate));
    const realEstateResponse = await userWS.getUser(contactItem.user);
    dispatch(saveUserEstateAction(realEstateResponse));
    showVisitaProgramadaX();
  };

  const handleDate = date => {
    const dateAux = new Date(date);
    const day = dateAux.getDate().toString().padStart(2, '0');
    const month = (dateAux.getMonth() + 1).toString().padStart(2, '0');
    const year = dateAux.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  const MapContacts = ({x, show}) => (
    <>
      {x.map(contactItem => (
        <Pressable onPress={() => show(contactItem)} style={styles.button}>
          <View>
            <Text style={styles.textButton}>
              {contactItem.comment.slice(0, 35) + '...'}
            </Text>
            <Text style={styles.textDescription}>
              {handleDate(contactItem.date)}
            </Text>
          </View>
        </Pressable>
      ))}
    </>
  );

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      i18n.t('errors.connection'),
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      0,
      0,
    );
  };

  return (
    <View style={styles.generalContainer}>
      <View style={styles.containerRow}>
        <View style={styles.AvatarContainer}>
          {avatarName && (
            <Image source={{uri: avatarName}} style={styles.profilePhoto} />
          )}
        </View>
        <View>
          <Text style={styles.textH1}>{name}</Text>
          {contacts ? (
            <Text style={styles.text}>
              {contactsLen + ' ' + i18n.t('programmedViews')}
            </Text>
          ) : null}
        </View>
      </View>
      <Text style={styles.textH1}>{i18n.t('programmedViews')}</Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {contacts && contacts.some(item => item.type === 'visit') ? (
            <MapContacts x={contacts} show={handleContactClick} />
          ) : (
            <>
              <Text style={styles.textNoVisits}>
                {i18n.t('noVisitsFound_start_realEstate')}
              </Text>
              <Text style={styles.text2NoVisits}>
                {i18n.t('noVisitsFound_end_realEstate')}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
      <Button
        onPress={() => goBack()}
        text={i18n.t('goBack')}
        color={'secondary'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.SECONDARY,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  scrollContainer: {
    height: 480,
    width: '90%',
  },
  button: {
    width: '96%',
    height: 68,
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textButton: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.SM,
    marginTop: 5,
    marginBottom: 5,
  },
  textDescription: {
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.SM,
  },
  textH1: {
    marginBottom: 3,
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  text: {
    color: Theme.colors.WHITE,
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
  questionsPhoto: {
    width: 47,
    height: 47,
    margin: 12,
    borderWidth: 1,
    borderRadius: 45,
    borderColor: Theme.colors.SECONDARY,
  },
  textNoVisits: {
    alignSelf: 'center',
    marginTop: 106,
    marginBottom: 8,
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  text2NoVisits: {
    alignSelf: 'center',
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.SEMIBOLD,
  },
});

export default VisitasProgramadasUI;
