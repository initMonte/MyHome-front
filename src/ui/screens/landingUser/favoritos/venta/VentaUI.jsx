import React, {useState, useEffect} from 'react';
import {ScrollView, View, StatusBar, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {saveEstateAction} from '../../../../../redux/slices/EstateReducer';
import Theme from '../../../../../styles/Theme';
import CardState from '../../../../components/cardState';
import IMAGES from '../../../../../assets/images/images';
import i18n from '../../../../../assets/strings/I18n';
import {userWS} from '../../../../../networking/api/endpoints/UserEndpoints';
import { useFocusEffect } from '@react-navigation/native';

const MapEstates = ({x, show}) => (
  <>
    {x
      .filter(estateItem => estateItem.rentOrSale === 'venta')
      .map(estateItem => (
        <CardState
          key={estateItem._id}
          onPress={() => show(estateItem)}
          size="S"
          image={{uri: estateItem.images[0]}}
          ubication={estateItem.neighborhood}
          amb={estateItem.roomsAmount}
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

const VentaUI = ({showPublicacionX}) => {
  const [estatesFavs, setEstatesFavs] = useState();
  const dispatch = useDispatch();

  useFocusEffect(React.useCallback(() => {
    userWS
      .getFavorites()
      .then(response => {
        // Get exitoso
        //console.log(response.data.estates);
        setEstatesFavs(response.data.estates);
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
    }, [])
  );

  const handleCardStateClick = estateItem => {
    console.log('--------____________------------');
    console.log(estateItem);
    console.log('--------____________------------');
    dispatch(saveEstateAction(estateItem));
    showPublicacionX();
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
        {estatesFavs &&
        estatesFavs.some(item => item.rentOrSale === 'venta') ? (
          <MapEstates x={estatesFavs} show={handleCardStateClick} />
        ) : (
          <View style={styles.containerNoImage}>
            <IMAGES.SVG.LOGO_PLACEHOLDER width={380} height={230} />
            <Text style={styles.textNoImage}>
              {i18n.t('noStatesFound_addFavStart') +
                i18n.t('noStatesFound_sale') +
                i18n.t('noStatesFound_addFavEnd')}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    rowGap: 16,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default VentaUI;
