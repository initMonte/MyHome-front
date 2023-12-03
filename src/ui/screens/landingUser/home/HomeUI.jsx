import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Modal from 'react-native-modal';

import Theme from '../../../../styles/Theme';
import IMAGES from '../../../../assets/images/images';
import i18n from '../../../../assets/strings/I18n';

import {
  resetFilterAction,
  saveEstateAction,
} from '../../../../redux/slices/EstateReducer';
import {estatesWS} from '../../../../networking/api/endpoints/EstatesEndpoints';

import CardState from '../../../components/cardState';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';
import {useFocusEffect} from '@react-navigation/native';

const HomeUI = ({showFiltrosBusqueda, showPublicacionX}) => {
  const dispatch = useDispatch();
  const [isModalUbicationVisible, setIsModalUbicationVisible] = useState(false);
  const {estatesArray, useFilter} = useSelector(state => state.estate);
  const [estates, setEstates] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const [favorites, setFavorites] = useState();

  useEffect(() => {
    console.log('useFilter: ' + useFilter);
    if (!useFilter) {
      handleLocation().then(
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
          }),
      );
    } else {
      setEstates(estatesArray);
    }
  }, [estatesArray, lat, long, useFilter]);

  const handleModalUbicationClose = () => {
    setIsModalUbicationVisible(false);
  };

  const handleLocation = async () => {
    await Geolocation.getCurrentPosition(
      pos => {
        console.log(pos);
        setLat(pos.coords.latitude);
        setLong(pos.coords.longitude);
      },
      error => {
        console.log('GetCurrentPosition Error', JSON.stringify(error));
        setIsModalUbicationVisible(true);
      },
      {enableHighAccuracy: true},
    );
  };

  const handleGetNearStates = async () => {
    await estatesWS
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
  };

  useFocusEffect(
    React.useCallback(() => {
      handleGetFavorites();
    }, []),
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
          addedFav={
            favorites &&
            favorites.some(elemento => elemento._id === estateItem._id)
          }
          onPressAddFav={() => handleAddFavorite(estateItem._id)}
          onPressUnFav={() => handleDeleteFavorite(estateItem._id)}
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

  const handleRefresh = async () => {
    dispatch(resetFilterAction());
    await handleLocation();
    handleGetNearStates();
  };

  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
        <Modal isVisible={isModalUbicationVisible}>
          <View style={styles.container}>
            <Text style={styles.modalH1}>
              {i18n.t('locationServicesUnavailable_H1')}
            </Text>
            <Text style={styles.modalText}>
              {i18n.t('locationServicesUnavailable_text')}
            </Text>
            <Button
              title={i18n.t('close')}
              onPress={handleModalUbicationClose}
            />
          </View>
        </Modal>
        <View style={styles.header}>
          <Pressable onPress={handleRefresh}>
            <View style={styles.smallContainer}>
              <IMAGES.SVG.UBICATION width={20} height={20} />
              <Text style={styles.textHeader}>
                {i18n.t('refreshUbication')}
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={showFiltrosBusqueda}>
            <IMAGES.SVG.FILTER width={28} height={28} />
          </Pressable>
        </View>
        <View style={styles.bodyContainer}>
          {estates && estates.length > 0 ? (
            <MapEstates x={estates} show={handleCardStateClick} />
          ) : (
            <View style={styles.containerNoImage}>
              <IMAGES.SVG.LOGO_PLACEHOLDER width={380} height={230} />
              <Text style={styles.textNoImage}>{i18n.t('noStatesFound')}</Text>
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
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '88%',
    flexDirection: 'row',
    alignItems: 'center',
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
    padding: 4,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Theme.colors.PRIMARY,
  },
  bodyContainer: {
    marginTop: 14,
    marginBottom: 24,
    rowGap: 16,
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
  modalH1: {
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 6,
  },
  modalText: {
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.SM,
    marginBottom: 16,
  },
});

export default HomeUI;
