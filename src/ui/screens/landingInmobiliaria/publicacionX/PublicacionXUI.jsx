import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Share from 'react-native-share';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import PhotoViewer from '../../../components/photoViewer';

import {saveRealEstateAvatarAction} from '../../../../redux/slices/EstateReducer';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

const url = 'IntegrarConBack.com.ar';
const message = i18n.t('share_text');

const options = {
  url,
  message,
};

const PublicacionXUI = ({goBack, showEditarPublicacionX}) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    description,
    rentOrSale,
    street,
    addressNumber,
    neighborhood,
    state,
    country,
    estateType,
    coveredSquareMeters,
    semiUncoveredSquaremeters,
    uncoveredSquareMeters,
    roomsAmount,
    bathroomsAmount,
    bedroomsAmount,
    terrace,
    balcony,
    storage,
    garage,
    frontOrBack,
    antiquity,
    orientation,
    amenites,
    status,
    price,
    currency,
    expenses,
    expenseCurrency,
    latitude,
    longitude,
    images,
    realEstate,
    realEstateAvatar,
  } = useSelector(state => state.estate);

  console.log(realEstateAvatar);

  const [imagenesPrueba, setImagenesPrueba] = useState([
    IMAGES.OTHERS.TEMPORAL_IMAGE,
    IMAGES.OTHERS.TEMPORAL_IMAGE,
    IMAGES.OTHERS.TEMPORAL_IMAGE,
    IMAGES.OTHERS.TEMPORAL_IMAGE,
    IMAGES.OTHERS.TEMPORAL_IMAGE,
  ]);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await userWS.getUser(realEstate);
        dispatch(saveRealEstateAvatarAction(response));
      } catch (error) {
        if (error.response && error.response.status === 403) {
          console.error('Access denied. You are not authenticated.');
        } else {
          console.error('An error occurred:', error);
        }
      }
    };
    fetchAvatar();
  }, [dispatch, realEstate, realEstateAvatar]);

  const switchTypeAndStatus = () => {
    switch (rentOrSale) {
      case 'alquiler':
        switch (status) {
          case 'alquiler - venta':
            return i18n.t('rent');
          case 'reservada':
            return i18n.t('rent_reserved');
          case 'alquilada - vendida':
            return i18n.t('rented');
          default:
            return;
        }
      case 'venta':
        switch (status) {
          case 'alquiler - venta':
            return i18n.t('sell');
          case 'reservada':
            return i18n.t('sell_reserved');
          case 'alquilada - vendida':
            return i18n.t('sold');
          default:
            return;
        }
    }
  };

  const switchOrientation = () => {
    switch (orientation) {
      case 'norte':
        return i18n.t('north');
      case 'este':
        return i18n.t('east');
      case 'sur':
        return i18n.t('south');
      case 'oeste':
        return i18n.t('west');
    }
  };

  const switchEstateType = () => {
    switch (estateType) {
      case 'casa':
        return i18n.t('house');
      case 'ph':
        return i18n.t('ph');
      case 'departamento':
        return i18n.t('department');
      case 'local':
        return i18n.t('local');
      case 'oficina':
        return i18n.t('office');
      case 'galpon':
        return i18n.t('galpon');
      case 'terreno':
        return i18n.t('terreno');
    }
  };

  function switchCurrency(x) {
    switch (x) {
      case 'peso':
        return i18n.t('ars');
      case 'dolar':
        return i18n.t('usd');
    }
  }

  return (
    <ScrollView style={styles.generalContainer} nestedScrollEnabled={true}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <View style={styles.containerImage}>
          <Image source={{uri: images[0]}} style={styles.bigImage} />
          <View style={styles.rowBetween}>
            <Pressable onPress={() => goBack()}>
              <IMAGES.SVG.BUTTON_BACK width={45} height={45} />
            </Pressable>
            <Pressable onPress={() => showEditarPublicacionX()}>
              <IMAGES.SVG.BUTTON_EDIT width={45} height={45} />
            </Pressable>
          </View>
          <View style={styles.flexEnd}>
            <Pressable
              onPress={() =>
                Share.open(options)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    err && console.log(err);
                  })
              }>
              <IMAGES.SVG.BUTTON_SHARE width={45} height={45} />
            </Pressable>
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.itemsRow}>
              <Text style={styles.price}>
                {switchCurrency(currency) + ' ' + price}
              </Text>
              <Text style={styles.expenses}>
                {expenses
                  ? '+' + switchCurrency(expenseCurrency) + ' ' + expenses
                  : null}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.HOME_PRIMARY width={14} height={14} />
              <Text style={styles.imageIconsFont}>{switchEstateType()}</Text>
            </View>
          </View>
          {realEstateAvatar && (
            <Image
              source={{uri: realEstateAvatar}}
              style={styles.logoRealState}
            />
          )}
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.street}>{street + ' ' + addressNumber}</Text>
          <View style={styles.itemsRow}>
            <Text style={styles.ubication}>{neighborhood + ', ' + state}</Text>
            <Text style={styles.ventaAlquiler}>{switchTypeAndStatus()}</Text>
          </View>
          <View style={styles.itemsRow}>
            <View style={styles.item}>
              <IMAGES.SVG.DOOR width={16} height={16} />
              <Text style={styles.bodyIconsFont}>
                {roomsAmount + ' ' + i18n.t('amb')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.BED width={16} height={16} />
              <Text style={styles.bodyIconsFont}>
                {bedroomsAmount + ' ' + i18n.t('dorm')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.SHOWER width={16} height={16} />
              <Text style={styles.bodyIconsFont}>
                {bathroomsAmount + ' ' + i18n.t('bathrooms')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.RULER width={16} height={16} />
              <Text style={styles.bodyIconsFont}>
                {coveredSquareMeters +
                  semiUncoveredSquaremeters +
                  uncoveredSquareMeters +
                  ' ' +
                  i18n.t('m2')}
              </Text>
            </View>
          </View>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.itemscontainer}>
            <View style={styles.item}>
              <IMAGES.SVG.COMPASS_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>
                {frontOrBack === 'frente'
                  ? i18n.t('frente')
                  : i18n.t('contrafrente')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.COMPASS_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>
                {i18n.t('orientation') + ' ' + switchOrientation()}
              </Text>
            </View>
            {coveredSquareMeters > 0 ? (
              <View style={styles.item}>
                <IMAGES.SVG.RULER_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>
                  {coveredSquareMeters +
                    ' ' +
                    i18n.t('m2') +
                    ' ' +
                    i18n.t('surfaceCover')}
                </Text>
              </View>
            ) : null}
            {semiUncoveredSquaremeters > 0 ? (
              <View style={styles.item}>
                <IMAGES.SVG.RULER_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>
                  {semiUncoveredSquaremeters +
                    ' ' +
                    i18n.t('m2') +
                    ' ' +
                    i18n.t('surfaceSemicover')}
                </Text>
              </View>
            ) : null}
            {uncoveredSquareMeters > 0 ? (
              <View style={styles.item}>
                <IMAGES.SVG.RULER_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>
                  {uncoveredSquareMeters +
                    ' ' +
                    i18n.t('m2') +
                    ' ' +
                    i18n.t('surfaceUncover')}
                </Text>
              </View>
            ) : null}
            <View style={styles.item}>
              <IMAGES.SVG.COMPASS_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>
                {antiquity + ' ' + i18n.t('antiguedad')}
              </Text>
            </View>
            {garage > 0 ? (
              <View style={styles.item}>
                <IMAGES.SVG.PARKING_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>
                  {garage + ' ' + i18n.t('parking')}
                </Text>
              </View>
            ) : null}
            {balcony ? (
              <View style={styles.item}>
                <IMAGES.SVG.CHECKBOX_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>{i18n.t('balcony')}</Text>
              </View>
            ) : null}
            {terrace ? (
              <View style={styles.item}>
                <IMAGES.SVG.CHECKBOX_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>{i18n.t('terraza')}</Text>
              </View>
            ) : null}
            {storage ? (
              <View style={styles.item}>
                <IMAGES.SVG.CHECKBOX_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>{i18n.t('baulera')}</Text>
              </View>
            ) : null}
            {amenites ? (
              <View style={styles.item}>
                <IMAGES.SVG.CHECKBOX_PRIMARY width={20} height={20} />
                <Text style={styles.bodyIconsFont}>
                  {i18n.t('amenities') + ': ' + amenites}
                </Text>
              </View>
            ) : null}
          </View>
          <Text style={styles.photosFont}>{i18n.t('photos')}</Text>
          <PhotoViewer imagesSources={images} uri={true} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    width: '100%',
    height: 220,
    backgroundColor: 'black',
  },
  bigImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  rowBetween: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexEnd: {
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerTitle: {
    margin: 12,
  },
  title: {
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  price: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 5,
    marginBottom: 5,
  },
  expenses: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 5,
    marginBottom: 5,
  },
  logoRealState: {
    width: 70,
    height: 70,
    borderRadius: 45,
    position: 'absolute',
    right: 28,
    bottom: -34,
  },
  itemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIconsFont: {
    color: Theme.colors.WHITE,
    marginLeft: 4,
  },
  bodyContainer: {
    width: '100%',
    paddingTop: 16,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  street: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  ubication: {
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.M,
    marginBottom: 10,
  },
  ventaAlquiler: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  bodyIconsFont: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.SM,
    marginLeft: 6,
  },
  description: {
    marginTop: 16,
    marginBottom: 16,
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.SM,
  },
  itemscontainer: {
    rowGap: 6,
  },
  photosFont: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 24,
    marginBottom: 12,
  },
  photosScroll: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  photosRow: {
    flexDirection: 'row',
    columnGap: 6,
    marginBottom: 16,
  },
  smallPhoto: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
});

export default PublicacionXUI;
