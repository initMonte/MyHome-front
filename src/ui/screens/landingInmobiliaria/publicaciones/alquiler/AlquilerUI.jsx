import React, {useState, useEffect} from 'react';
import {ScrollView, View, StatusBar, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {saveEstateAction} from '../../../../../redux/slices/EstateReducer';
import {estatesWS} from '../../../../../networking/api/endpoints/EstatesEndpoints';
import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import CardState from '../../../../components/cardState';
import IMAGES from '../../../../../assets/images/images';

const MapEstates = ({x, show}) => (
  <>
    {x
      .filter(estateItem => estateItem.rentOrSale === 'alquiler')
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

const AlquilerUI = ({showPublicacionX}) => {
  const [estates, setEstates] = useState();
  const id = useSelector(state => state.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    estatesWS
      .getEstatesByUserId(id)
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
  }, [id]);

  const handleCardStateClick = estateItem => {
    console.log('--------____________------------');
    console.log(estateItem);
    console.log('--------____________------------');
    dispatch(saveEstateAction(estateItem));
    console.log('--------____________------------');
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
        {estates ? (
          <MapEstates x={estates} show={handleCardStateClick} />
        ) : null}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default AlquilerUI;
