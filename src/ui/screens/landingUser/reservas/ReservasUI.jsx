import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import Theme from '../../../../styles/Theme';
import IMAGES from '../../../../assets/images/images';
import i18n from '../../../../assets/strings/I18n';

import {saveEstateAction} from '../../../../redux/slices/EstateReducer';
import {estatesWS} from '../../../../networking/api/endpoints/EstatesEndpoints';

import CardState from '../../../components/cardState';

const ReservasUI = ({showPublicacionX}) => {
  const dispatch = useDispatch();
  const [estates, setEstates] = useState();

  useEffect(() => {
    estatesWS
      .getReservations()
      .then(response => {
        // Get exitoso
        console.log(response.data.estates);
        setEstates(response.data.estates);
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
  }, []);

  const handleCardStateClick = estateItem => {
    console.log('--------____________------------');
    console.log(estateItem);
    console.log('--------____________------------');
    dispatch(saveEstateAction(estateItem));
    showPublicacionX();
  };

  const MapEstates = ({x, show}) => (
    <>
      {x.map(estateItem => (
        <CardState
          key={estateItem._id}
          onPress={() => show(estateItem)}
          size="L"
          image={{uri: estateItem.images[0]}}
          tittle={estateItem.title}
          ubication={handleUbication(
            estateItem.neighborhood + ', ' + estateItem.state,
          )}
          bath={estateItem.bathroomsAmount}
          dorm={estateItem.bedroomsAmount}
          amb={estateItem.roomsAmount}
          description={handleDescription(estateItem.description)}
          m2={
            estateItem.coveredSquareMeters +
            estateItem.semiUncoveredSquaremeters +
            estateItem.uncoveredSquareMeters
          }
          price={estateItem.price}
          currency={
            estateItem.currency === 'peso' ? i18n.t('ars') : i18n.t('usd')
          }
        />
      ))}
    </>
  );

  const handleUbication = ubication => {
    if (ubication.length > 40) {
      return ubication.slice(0, 40) + '...';
    }
    return ubication;
  };

  const handleDescription = desc => {
    if (desc.length > 50) {
      return desc.slice(0, 50) + '...';
    }
    return desc;
  };

  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          {estates ? (
            <MapEstates x={estates} show={handleCardStateClick} />
          ) : (
            <View style={styles.containerNoImage}>
              <IMAGES.SVG.LOGO_PLACEHOLDER width={380} height={230} />
              <Text style={styles.textNoImage}>
                {i18n.t('noStatesFound_reserves')}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    marginBottom: 24,
    rowGap: 16,
  },
  text: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.L,
  },
  containerNoImage: {
    marginTop: 16,
    alignItems: 'center',
    width: '95%',
  },
  textNoImage: {
    margin: 12,
    color: Theme.colors.DISABLED,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
});

export default ReservasUI;
