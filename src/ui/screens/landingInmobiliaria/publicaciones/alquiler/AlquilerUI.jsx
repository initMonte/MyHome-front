import React, {useState, useEffect} from 'react';
import {ScrollView, View, StatusBar, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {estatesWS} from '../../../../../networking/api/endpoints/EstatesEndpoints';
import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import CardState from '../../../../components/cardState';
import IMAGES from '../../../../../assets/images/images';

const Test = ({x, show}) => (
  <>
    {x
      .filter(estateItem => estateItem.status === 'alquiler')
      .map(estateItem => (
        <CardState
          key={estateItem._id}
          onPress={() => show()}
          size="S"
          image={IMAGES.OTHERS.TEMPORAL_IMAGE}
          tittle={estateItem.steet}
          ubication={estateItem.neighborhood}
          logoRealState={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
          amb={estateItem.roomsAmount}
          dorm={estateItem.bedroomsAmount}
          bath={estateItem.bathroomsAmount}
          m2={
            estateItem.coveredSquareMeters +
            estateItem.semiUncoveredSquaremeters +
            estateItem.uncoveredSquareMeters
          }
          price={estateItem.price}
          currency={estateItem.currency}
        />
      ))}
  </>
);

const AlquilerUI = ({showPublicacionX}) => {
  const [estates, setEstates] = useState();
  const id = useSelector(state => state.user.id);

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

  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        {estates ? <Test x={estates} show={showPublicacionX} /> : null}
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
