import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';

const ConsultasUI = ({goBack, showConsultaX}) => {
  const {name, avatarName} = useSelector(state => state.user);
  return (
    <View style={styles.generalContainer}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <View style={styles.containerRow}>
        <View style={styles.AvatarContainer}>
          {avatarName && (
            <Image source={{uri: avatarName}} style={styles.profilePhoto} />
          )}
        </View>
        <View>
          <Text style={styles.textH1}>{name}</Text>
          <Text style={styles.text}>{'3 ' + i18n.t('questions')}</Text>
        </View>
      </View>
      <Text style={styles.textH1}>{i18n.t('questions')}</Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Pressable onPress={() => showConsultaX()} style={styles.button}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <View>
              <Text style={styles.textButton}>{'Alguien Lopez'}</Text>
              <Text style={styles.textDescription}>{'11/11/1111'}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => showConsultaX()} style={styles.button}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <View>
              <Text style={styles.textButton}>{'Alguien Lopez'}</Text>
              <Text style={styles.textDescription}>{'11/11/1111'}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => showConsultaX()} style={styles.button}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <View>
              <Text style={styles.textButton}>{'Alguien Lopez'}</Text>
              <Text style={styles.textDescription}>{'11/11/1111'}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => showConsultaX()} style={styles.button}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <View>
              <Text style={styles.textButton}>{'Alguien Lopez'}</Text>
              <Text style={styles.textDescription}>{'11/11/1111'}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => showConsultaX()} style={styles.button}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <View>
              <Text style={styles.textButton}>{'Alguien Lopez'}</Text>
              <Text style={styles.textDescription}>{'11/11/1111'}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => showConsultaX()} style={styles.button}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <View>
              <Text style={styles.textButton}>{'Alguien Lopez'}</Text>
              <Text style={styles.textDescription}>{'11/11/1111'}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => showConsultaX()} style={styles.button}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <View>
              <Text style={styles.textButton}>{'Alguien Lopez'}</Text>
              <Text style={styles.textDescription}>{'11/11/1111'}</Text>
            </View>
          </Pressable>
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
  button: {
    width: '96%',
    height: 68,
    marginTop: 16,
    backgroundColor: Theme.colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  textH1: {
    marginBottom: 3,
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  text: {
    color: Theme.colors.WHITE,
  },
  AvatarContainer: {
    width: 77,
    height: 77,
    marginRight: 26,
  },
  profilePhoto: {
    width: 77,
    height: 77,
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
});

export default ConsultasUI;
