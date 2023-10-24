import React from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Image} from 'react-native-svg';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';

const RegisterSuccessfulUI = ({goBack, showLandingInmobiliaria}) => {
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
        <Text style={styles.text}>{i18n.t('succesRegister')}</Text>
        <Text style={styles.text2}>integrarConBack@gmail.com</Text>
        <IMAGES.SVG.SUCCESS width={100} height={100} />
        <Button
          text={i18n.t('login')}
          size="M"
          color="secondary"
          onPress={() => {
            showLandingInmobiliaria();
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
    marginBottom: 40,
  },
  container3: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    marginTop: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  text2: {
    marginTop: 20,
    marginBottom: 20,
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  text3: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  textH1: {
    marginBottom: 20,
    textAlign: 'center',
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.XL,
    fontWeight: Theme.fonts.BOLD,
  },
});

export default RegisterSuccessfulUI;
