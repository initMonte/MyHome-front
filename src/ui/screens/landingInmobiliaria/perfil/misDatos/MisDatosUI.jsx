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

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';
import InputText from '../../../../components/inputText';

const MisDatosUI = ({goBack}) => {
  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
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
          <Text style={styles.textH1}>{'Integrar con Back'}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.tittleBox}>{i18n.t('myData')}</Text>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('email')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_email')}
              keyboard="email-address"
              size="L"
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('realStateName')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_realStateName')}
              size="L"
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('phone1')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_phone')}
              keyboard="phone-pad"
              size="L"
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>
              {i18n.t('phone2')}
              <Text style={styles.opcional}>{'  ' + i18n.t('optional')}</Text>
            </Text>
            <InputText
              placeholder={i18n.t('placeholder_phone')}
              keyboard="phone-pad"
              size="L"
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('contactEmail')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_email')}
              keyboard="email-address"
              size="L"
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('actualPass')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_password')}
              keyboard="default"
              size="L"
              hideText={true}
            />
          </View>
          <View style={styles.littleBox}>
            <Text style={styles.text}>{i18n.t('newPass')}</Text>
            <InputText
              placeholder={i18n.t('placeholder_password')}
              keyboard="default"
              size="L"
              hideText={true}
            />
          </View>
          <Button
            onPress={() => goBack()}
            text={i18n.t('saveChanges')}
            color={'primary'}
            size="ML"
          />
        </View>
        <Button
          onPress={() => goBack()}
          text={i18n.t('goBack')}
          color={'secondary'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.SECONDARY,
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
  box: {
    width: 360,
    backgroundColor: Theme.colors.WHITE,
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  littleBox: {
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  tittleBox: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  text: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginLeft: 20,
  },
  opcional: {
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.S,
  },
  textH1: {
    marginBottom: 3,
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  profilePhoto: {
    width: 77,
    height: 77,
    marginRight: 26,
  },
});

export default MisDatosUI;
