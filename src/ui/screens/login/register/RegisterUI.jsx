import React from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-svg';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

const RegisterUI = ({
  showLoginInmobiliaria,
  showLandingInmobiliaria,
}) => {
  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container1}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <Text style={styles.textH1}>{i18n.t('realStateRegister')}</Text>
        <IMAGES.SVG.LOGO width={380} height={230} />
        <View style={styles.container2}>
          <Text style={styles.text}>{i18n.t('email') + ' ' + i18n.t('emailConfirmationNote')}</Text>
          <InputText placeholder={i18n.t('placeholder_email')} />
          <Text style={styles.text}>{i18n.t('pass')}</Text>
          <InputText placeholder={i18n.t('placeholder_password')} />
          <Text style={styles.text}>{i18n.t('realStateName')}</Text>
          <InputText placeholder={i18n.t('realStateName') + '...'} />
          <Text style={styles.text}>{i18n.t('phone1')}</Text>
          <InputText placeholder={i18n.t('phone1') + '...'} />
          <Text style={styles.text}>{i18n.t('phone2')}</Text>
          <InputText placeholder={i18n.t('phone2') + '...'} />
          <Text style={styles.text}>{i18n.t('contactEmail') + ' ' + i18n.t('canBeRepeted')}</Text>
          <InputText placeholder={i18n.t('contactEmail') + '...'} />
        </View>
        <Button
          text={i18n.t('register')}
          size="M"
          color="secondary"
          onPress={() => {
            showLandingInmobiliaria();
          }}
        />
        <Button
          text={i18n.t('goBack')}
          size="M"
          color="secondaryTransparent"
          onPress={() => {
            showLoginInmobiliaria();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container1: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    margin: 20,
  },
  container3: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  textH1: {
    margin: 20,
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.XL,
    fontWeight: Theme.fonts.BOLD,
  },
  presable1: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.SEMIBOLD,
  },
  pressable2: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    textDecorationLine: 'underline',
  },
});

export default RegisterUI;
