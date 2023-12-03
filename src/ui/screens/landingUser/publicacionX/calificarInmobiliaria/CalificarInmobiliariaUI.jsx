import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import IMAGES from '../../../../../assets/images/images';
import i18n from '../../../../../assets/strings/I18n';

import InputText from '../../../../components/inputText';
import Button from '../../../../components/button';
import StarSelector from '../../../../components/starSelector';

import {calificationWS} from '../../../../../networking/api/endpoints/CalificationEndpoints';
import {
  saveCalificationsAction,
  saveCalificationsAmountAction,
  saveCalificationsStarsAction,
} from '../../../../../redux/slices/CalificationReducer';

const CalificarInmobiliariaUI = ({goBack}) => {
  const dispatch = useDispatch();
  const {realEstate, realEstateAvatar, realEstateName} = useSelector(
    state => state.estate,
  );

  const [comment, setComment] = useState('');
  const [stars, setStars] = useState('');

  const handleComment = value => {
    setComment(value);
  };

  const handleStars = value => {
    setStars(value);
    console.log(value);
  };

  const handlePromStars = calificationsArray => {
    console.log('AAAAAAAAAAAAAAAAAA' + JSON.stringify(calificationsArray));
    const totalCalification = calificationsArray.reduce(
      (a, obj) => a + obj.calification,
      0,
    );
    console.log('AAAAAAAAAAAAAAAAAA' + totalCalification);
    let trimmedAverage = 0;
    if (totalCalification > 0) {
      const averageCalification = totalCalification / calificationsArray.length;
      trimmedAverage = parseFloat(averageCalification.toFixed(2));
    }
    dispatch(saveCalificationsStarsAction(trimmedAverage));
    return;
  };

  const handleSend = async () => {
    await calificationWS
      .createCalification(realEstate, stars, comment)
      .then(response => {
        // Post exitoso
        console.log(response.data);
        calificationWS
          .getCalifications(realEstate)
          .then(response2 => {
            // Get exitoso
            console.log(
              'CALIFICACIONEEEEEEEES       : ' + response2.data.califications,
            );
            dispatch(saveCalificationsAction(response2.data));
            handlePromStars(response2.data.califications);
            dispatch(
              saveCalificationsAmountAction(
                response2.data.califications.length,
              ),
            );
          })
          .catch(error => {
            // Handle error
            console.error(
              'Server responded with an error status:',
              error.response2.status,
            );
            console.error('Response data:', error.response2.data);
          });
      });
    goBack();
  };

  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
        <Text style={styles.textH1}>{i18n.t('reserve_success')}</Text>
        <Text style={styles.textDescription}>{i18n.t('thanks')}</Text>
        <View style={styles.containerBody}>
          <Text style={styles.textDescription}>{i18n.t('pleaseReview')}</Text>
          <View style={styles.RowRealEstate}>
            <Image
              source={{uri: realEstateAvatar}}
              style={styles.logoRealEstate}
            />
            <View style={styles.ColumnRealEstate}>
              <Text style={styles.realStateName}>{realEstateName}</Text>
              <StarSelector changeValue={handleStars} />
            </View>
          </View>
          <Text style={styles.textH2}>{i18n.t('Comment')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_comment')}
            changeValue={handleComment}
            borderWidth={1}
            borderRadius={8}
            height={120}
          />
        </View>
        <Button text={i18n.t('reserve')} onPress={() => handleSend()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container: {
    padding: 12,
    width: '100%',
    alignItems: 'center',
  },
  textH1: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 24,
  },
  textDescription: {
    color: Theme.colors.BLACK,
    fontWeight: Theme.fonts.LIGHT,
    marginBottom: 34,
  },
  containerBody: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 34,
    marginBottom: 24,
  },
  textH2: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginLeft: 6,
    marginTop: 24,
  },
  RowRealEstate: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    columnGap: 16,
  },
  ColumnRealEstate: {
    alignItems: 'center',
    flexWrap: 'no-wrap',
    rowGap: 8,
  },
  logoRealEstate: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: Theme.colors.BLACK,
  },
  realStateName: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
  },
});

export default CalificarInmobiliariaUI;
