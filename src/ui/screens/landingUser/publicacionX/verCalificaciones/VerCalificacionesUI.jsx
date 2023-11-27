import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';

import StarShow from '../../../../components/starShow';
import Button from '../../../../components/button';

const MapCalifications = ({x}) => (
  <>
    {x.map(calificationItem => (
      <View style={styles.card}>
        <View style={styles.insideCard}>
          <View style={styles.starAndDate}>
            <StarShow stars={calificationItem.calification} />
            <Text style={styles.textDate}>
              {handleDate(calificationItem.created_at)}
            </Text>
          </View>
          <Text style={styles.textDescription}>{calificationItem.comment}</Text>
        </View>
      </View>
    ))}
  </>
);

const handleDate = date => {
  const dateAux = new Date(date);
  const day = dateAux.getDate().toString().padStart(2, '0');
  const month = (dateAux.getMonth() + 1).toString().padStart(2, '0');
  const year = dateAux.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

const VerCalificacionesUI = ({goBack}) => {
  const {califications, calificacionsAmount, calificationStars} = useSelector(
    state => state.calification,
  );
  const {realEstateAvatar, realEstateName} = useSelector(state => state.estate);

  return (
    <View style={styles.generalContainer}>
      <View style={styles.containerRow}>
        <Image source={{uri: realEstateAvatar}} style={styles.profilePhoto} />
        <View>
          <Text style={styles.textH1}>{realEstateName}</Text>
          <Text style={styles.textStars}>
            {calificationStars + ' '}
            <StarShow stars={calificationStars} />
          </Text>
          <Text style={styles.text}>
            {calificacionsAmount + ' ' + i18n.t('reviews')}
          </Text>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {califications ? (
            <MapCalifications x={califications} />
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
  card: {
    width: '96%',
    marginTop: 16,
    padding: 12,
    backgroundColor: Theme.colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  insideCard: {
    width: '100%',
  },
  starAndDate: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 5,
    marginBottom: 5,
  },
  textDescription: {
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.SM,
  },
  textDate: {
    justifyContent: 'flex-end',
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.S,
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
  profilePhoto: {
    width: 77,
    height: 77,
    marginRight: 26,
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
  textStars: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  iconStar: {
    color: Theme.colors.PRIMARY,
    marginLeft: 4,
    marginRight: 6,
  },
});

export default VerCalificacionesUI;
