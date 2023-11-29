import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {styleUrl} from '../../../../config/ApiConfig';
import Theme from '../../../../styles/Theme';
import IMAGES from '../../../../assets/images/images';
import i18n from '../../../../assets/strings/I18n';

import {saveEstateAction} from '../../../../redux/slices/EstateReducer';
import {estatesWS} from '../../../../networking/api/endpoints/EstatesEndpoints';

import CardState from '../../../components/cardState';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';
import { useFocusEffect } from '@react-navigation/native';

const HomeUI = ({showFiltrosBusqueda, showPublicacionX}) => {
  const dispatch = useDispatch();
  const [favs, setFavs] = useState();
  const [estates, setEstates] = useState();
  const lat = '-34.5057';
  const long = '-58.5060';

  const [favorites, setFavorites] = useState();

  useEffect(() => {
    estatesWS
      .getNearEstates(lat, long)
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
  }, [lat, long]);

  useFocusEffect(React.useCallback(() => {
    handleGetFavorites();
    }, [])
  );

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
          favButton={true}
          addedFav={favorites && favorites.some((elemento) => elemento._id === estateItem._id)}
          onPressAddFav={() => handleAddFavorite(estateItem._id)}
          onPressUnFav={() => handleDeleteFavorite(estateItem._id)}
          size="L"
          image={{uri: estateItem.images[0]}}
          tittle={estateItem.title}
          ubication={estateItem.neighborhood + ', ' + estateItem.state}
          bath={estateItem.bathroomsAmount}
          dorm={estateItem.bedroomsAmount}
          amb={estateItem.roomsAmount}
          description={estateItem.description.slice(0, 50) + '...'}
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

  const handleAddFavorite = estateId => {
    userWS
      .addFavorite(estateId)
      .then(response => {
        // Post exitoso
        console.log(response.data);
        handleGetFavorites();
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

  const handleDeleteFavorite = estateId => {
    userWS
      .deleteFavorite(estateId)
      .then(response => {
        // Delete exitoso
        console.log(response.data);
        handleGetFavorites();
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

  const handleGetFavorites = () => {
    userWS
      .getFavorites()
      .then(response => {
        // Get exitoso
        console.log('FAAAAAAAAAVS       : ' + response.data);
        const favoritos = response.data.estates;
        setFavorites(favoritos);
        console.log(favorites);
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
        <View style={styles.header}>
          <View style={styles.smallContainer}>
            <IMAGES.SVG.UBICATION width={20} height={20} />
            <Text style={styles.textHeader}>{i18n.t('ubication')}</Text>
          </View>
          <Pressable onPress={showFiltrosBusqueda}>
            <IMAGES.SVG.FILTER width={28} height={28} />
          </Pressable>
        </View>
        <View style={styles.bodyContainer}>
          {estates ? (
            <MapEstates x={estates} show={handleCardStateClick} />
          ) : (
            <View style={styles.containerNoImage}>
              <IMAGES.SVG.LOGO_PLACEHOLDER width={380} height={230} />
              <Text style={styles.textNoImage}>
                {i18n.t('noStatesFound_createStart') +
                  i18n.t('noStatesFound_sale') +
                  i18n.t('noStatesFound_createEnd')}
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
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  smallContainer: {
    flexDirection: 'row',
    columnGap: 4,
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  bodyContainer: {
    marginTop: 14,
    marginBottom: 24,
    rowGap: 16,
  },
});

export default HomeUI;
