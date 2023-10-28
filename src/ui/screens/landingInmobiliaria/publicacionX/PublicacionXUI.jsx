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
import Share from 'react-native-share';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';

const url = 'IntegrarConBack.com.ar';
const message = i18n.t('share_text');

const options = {
  url,
  message,
};

const PublicacionXUI = ({goBack, showEditarPublicacionX}) => {
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
          <Image
            source={IMAGES.OTHERS.TEMPORAL_IMAGE}
            style={styles.bigImage}
          />
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
            <Text style={styles.title}>{'Dpto Recoleta 5amb 3dorm'}</Text>
            <Text style={styles.price}>{'USD 70400'}</Text>
            <View style={styles.itemsRow}>
              <View style={styles.item}>
                <IMAGES.SVG.HOME_PRIMARY width={14} height={14} />
                <Text style={styles.imageIconsFont}>{'Departamento'}</Text>
              </View>
              <View style={styles.item}>
                <IMAGES.SVG.LENS_PRIMARY width={14} height={14} />
                <Text style={styles.imageIconsFont}>
                  {'46' + ' ' + i18n.t('views')}
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
            style={styles.logoRealState}
          />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.street}>{'Av Gral Las Heras 2100'}</Text>
          <View style={styles.itemsRow}>
            <Text style={styles.ubication}>{'Recoleta, CABA'}</Text>
            <Text style={styles.ventaAlquiler}>{'Venta'}</Text>
          </View>
          <View style={styles.itemsRow}>
            <View style={styles.item}>
              <IMAGES.SVG.DOOR width={18} height={18} />
              <Text style={styles.bodyIconsFont}>
                {'5' + ' ' + i18n.t('amb')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.BED width={18} height={18} />
              <Text style={styles.bodyIconsFont}>
                {'2' + ' ' + i18n.t('dorm')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.SHOWER width={18} height={18} />
              <Text style={styles.bodyIconsFont}>
                {'2' + ' ' + i18n.t('bathrooms')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.RULER width={18} height={18} />
              <Text style={styles.bodyIconsFont}>
                {'82' + ' ' + i18n.t('m2')}
              </Text>
            </View>
          </View>
          <Text style={styles.description}>
            {
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
            }
          </Text>
          <View style={styles.itemscontainer}>
            <View style={styles.item}>
              <IMAGES.SVG.BED_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>
                {'2' + ' ' + i18n.t('dorm')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.SHOWER_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>
                {'2' + ' ' + i18n.t('bathrooms')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.RULER_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>
                {'75' + ' ' + i18n.t('m2') + ' ' + i18n.t('surfaceCover')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.RULER_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>
                {'7' + ' ' + i18n.t('m2') + ' ' + i18n.t('surfaceUncover')}
              </Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.CHECKBOX_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>{i18n.t('balcony')}</Text>
            </View>
            <View style={styles.item}>
              <IMAGES.SVG.PARKING_PRIMARY width={20} height={20} />
              <Text style={styles.bodyIconsFont}>{i18n.t('parking')}</Text>
            </View>
          </View>
          <Text style={styles.photosFont}>{i18n.t('photos')}</Text>
          <ScrollView nestedScrollEnabled={true} horizontal={true}>
            <View style={styles.photosRow}>
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
              <Image
                source={IMAGES.OTHERS.TEMPORAL_IMAGE}
                style={styles.smallPhoto}
              />
            </View>
          </ScrollView>
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
    paddingTop: 36,
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
