import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';
import CardState from '../../../../components/cardState';
import {estatesWS} from '../../../../../networking/api/endpoints/EstatesEndpoints';
import {saveEstateAction, saveRealEstateAction} from '../../../../../redux/slices/EstateReducer';
import {userWS} from '../../../../../networking/api/endpoints/UserEndpoints';

const ConsultaXUI = ({goBack, showPublicacionX}) => {
  const dispatch = useDispatch();
  const {name, avatarName} = useSelector(state => state.user);
  const {id, comment, date, realEstate} = useSelector(state => state.contact);
  const [estate, setEstate] = useState();
  const [userRealEstate, setRealEstate] = useState();

  useEffect(() => {
    estatesWS
      .getEstate(realEstate)
      .then(response => {
        // Get exitoso
        console.log(response.data);
        setEstate(response.data);
        dispatch(saveEstateAction(response.data));
        userWS.getUser(realEstate).then(response2 => {
          // Get exitoso
          console.log(response2.data);
          setRealEstate(response2.data);
          dispatch(saveRealEstateAction(response2.data));
        });
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
  }, [dispatch, realEstate]);

  const handleDate = date => {
    const dateAux = new Date(date);
    const day = dateAux.getDate().toString().padStart(2, '0');
    const month = (dateAux.getMonth() + 1).toString().padStart(2, '0');
    const year = dateAux.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
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
          <View>
            <Text style={styles.textH1}>{name}</Text>
          </View>
        </View>
        <Text style={styles.textH1}>{i18n.t('question')}</Text>
        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.tittleBox}>{i18n.t('questionTo')}</Text>
            <Text style={styles.date}>{handleDate(date)}</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <Text style={styles.tittleBox}>{'Alguna Inmobiliaria'}</Text>
          </View>
          <View style={styles.flexStart}>
            <Text style={styles.textBox}>
              {i18n.t('email') + ' ' + 'Integrar con back'}
            </Text>
            <Text style={styles.textBox}>
              {i18n.t('phone') + ' ' + 'Integrar con back'}
            </Text>
          </View>
          <CardState
            onPress={() => showPublicacionX()}
            size="M"
            image={IMAGES.OTHERS.TEMPORAL_IMAGE}
            tittle="Av. Gral. Las Heras 2100"
            ubication="RECOLETA, CABA"
            currency="USD"
            price={72500}
            expenses={24000}
          />
          <View style={styles.messageFlexStart}>
            <Text style={styles.textBox}>{i18n.t('message')}</Text>
          </View>
          <TextInput
            multiline
            editable={false}
            numberOfLines={7}
            maxLength={300}
            value={comment}
            style={styles.message}
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
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexStart: {
    marginTop: 10,
    marginBottom: 16,
    width: '100%',
    justifyContent: 'flex-start',
  },
  box: {
    width: '95%',
    backgroundColor: Theme.colors.WHITE,
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  person: {
    width: '100%',
    height: 68,
    backgroundColor: Theme.colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  littleBox: {
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  tittleBox: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  textBox: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  text: {
    color: Theme.colors.WHITE,
  },
  date: {
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
  questionsPhoto: {
    width: 47,
    height: 47,
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 45,
    borderColor: Theme.colors.SECONDARY,
  },
  messageFlexStart: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'flex-start',
  },
  message: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Theme.colors.PLACEHOLDER,
    color: Theme.colors.BLACK,
  },
});

export default ConsultaXUI;
