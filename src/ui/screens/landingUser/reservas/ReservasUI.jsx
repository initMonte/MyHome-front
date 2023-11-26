import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import Theme from '../../../../styles/Theme';
import IMAGES from '../../../../assets/images/images';
import i18n from '../../../../assets/strings/I18n';

import {saveEstateAction} from '../../../../redux/slices/EstateReducer';
import {estatesWS} from '../../../../networking/api/endpoints/EstatesEndpoints';

import CardState from '../../../components/cardState';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

const ReservasUI = ({}) => {
  const dispatch = useDispatch();
  const [estates, setEstates] = useState();

  return (
    <View style={styles.container}>
      <IMAGES.SVG.LOGO width={380} height={230} />
      <Text style={styles.text}>{'Pagina en construccion'}</Text>
      <Text style={styles.text}>{'Estoy en RESERVAS'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.WHITE,
  },
  text: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.L,
  },
});

export default ReservasUI;
