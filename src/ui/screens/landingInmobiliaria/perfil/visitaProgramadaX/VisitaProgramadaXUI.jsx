import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';
import Button from '../../../../components/button';
import CardState from '../../../../components/cardState';

const VisitaProgramadaXUI = ({goBack, showPublicacionX}) => {
  const {name, avatarName} = useSelector(state => state.user);

  const handleShowPublicacion = () => {
    // INCLUIR LOGICA DEL ESTATE
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
        <View style={styles.containerRow}>
          <View style={styles.AvatarContainer}>
            {avatarName && (
              <Image source={{uri: avatarName}} style={styles.profilePhoto} />
            )}
          </View>
          <View>
            <Text style={styles.textH1}>{name}</Text>
            <Text style={styles.text}>{'3 ' + i18n.t('programmedViews')}</Text>
          </View>
        </View>
        <Text style={styles.textH1}>{i18n.t('programmedView')}</Text>
        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.tittleBox}>{i18n.t('askViewFrom')}</Text>
            <Text style={styles.date}>{'11/11/1111'}</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
              style={styles.questionsPhoto}
            />
            <Text style={styles.tittleBox}>{'Alguien Lopez'}</Text>
          </View>
          <View style={styles.flexStart}>
            <Text style={styles.textBox}>
              {i18n.t('email') + ' ' + 'Integrar con back'}
            </Text>
            <Text style={styles.textBox}>
              {i18n.t('phone') + ' ' + 'Integrar con back'}
            </Text>
          </View>
          <CardState
            onPress={() => handleShowPublicacion()}
            size="M"
            image={IMAGES.OTHERS.TEMPORAL_IMAGE}
            tittle="Av. Gral. Las Heras 2100"
            ubication="RECOLETA, CABA"
            currency="USD"
            price={72500}
            expenses={24000}
          />
          <View style={styles.row}>
            <View style={styles.dateTurnBox}>
              <Text style={styles.textBox}>{i18n.t('date')}</Text>
              <TextInput
                editable={false}
                value="11/11/1111"
                style={styles.message}
              />
            </View>
            <View style={styles.dateTurnBox}>
              <Text style={styles.textBox}>{i18n.t('turn')}</Text>
              <TextInput
                editable={false}
                value="Mañana"
                style={styles.message}
              />
            </View>
          </View>
          <View style={styles.messageFlexStart}>
            <Text style={styles.textBox}>{i18n.t('message')}</Text>
          </View>
          <TextInput
            multiline
            editable={false}
            numberOfLines={7}
            maxLength={300}
            value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
            style={styles.message}
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
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexStart: {
    marginTop: 10,
    marginBottom: 16,
    width: '100%',
    justifyContent: 'flex-start',
  },
  box: {
    width: '95%',
    backgroundColor: Theme.colors.WHITE,
    margin: 16,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  person: {
    width: '100%',
    height: 68,
    backgroundColor: Theme.colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  littleBox: {
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  tittleBox: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  textBox: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  text: {
    color: Theme.colors.WHITE,
  },
  date: {
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.S,
  },
  textH1: {
    marginBottom: 3,
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
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
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 45,
    borderColor: Theme.colors.SECONDARY,
  },
  dateTurnBox: {
    marginTop: 20,
    width: '40%',
    justifyContent: 'flex-start',
  },
  messageFlexStart: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'flex-start',
  },
  message: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Theme.colors.PLACEHOLDER,
    color: Theme.colors.BLACK,
  },
});

export default VisitaProgramadaXUI;
