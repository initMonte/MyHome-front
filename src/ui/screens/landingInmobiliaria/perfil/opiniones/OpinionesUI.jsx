import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';

const OpinionesUI = ({goBack}) => {
  return (
    <View style={styles.generalContainer}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <View style={styles.containerRow}>
        <Image
          source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
          style={styles.profilePhoto}
        />
        <View>
          <Text style={styles.textH1}>{'Integrar con Back'}</Text>
          <Text style={styles.textStars}>
            {'0, 3' + ' '}
            <IMAGES.SVG.STAR_FILL width={15} height={15} />
          </Text>
          <Text style={styles.text}>{'3 ' + i18n.t('reviews')}</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.insideCard}>
              <View style={styles.starAndDate}>
                <IMAGES.SVG.STAR_FILL width={15} height={15} />
                <Text style={styles.textDate}>{'11/11/1111'}</Text>
              </View>
              <Text style={styles.textDescription}>
                {'Muy piola toma 1 estrella crack'}
              </Text>
            </View>
          </View>
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
    height: 68,
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

export default OpinionesUI;
