import React from 'react';
import {Pressable, Text, StyleSheet, View, Image} from 'react-native';
import Theme from '../../styles/Theme';

import IMAGES from '../../assets/images/images';
import i18n from '../../assets/strings/I18n';

const CardState = ({
  onPress,
  size = 'S',
  image,
  favButton = false,
  addedFav = false,
  tittle,
  description,
  ubication,
  price,
  expenses,
  amb,
  dorm,
  bath,
  m2,
  logoRealState,
  onPressAddFav,
  onPressUnFav,
  currency,
  expenseCurrency,
  rentOrSale,
  status,
}) => {
  const generalContainer = StyleSheet.create({
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.WHITE,
  });

  const containerSizes = StyleSheet.create({
    L: {
      width: 408,
      height: 342,
    },
    M: {
      width: 356,
      height: 212,
    },
    S: {
      width: 165,
      height: 212,
    },
  });

  const photoGeneral = StyleSheet.create({
    borderRadius: 5,
  });

  const photo = StyleSheet.create({
    L: {
      width: 377,
      height: 193,
    },
    M: {
      width: 356,
      height: 168,
    },
    S: {
      width: 165,
      height: 168,
    },
  });

  const icons = StyleSheet.create({
    L: {
      width: 18,
      height: 18,
      marginRight: 2,
      marginLeft: 6,
    },
    S: {
      width: 15,
      height: 15,
      marginRight: 2,
    },
  });

  const favStyle = StyleSheet.create({
    L: {
      width: 45,
      height: 45,
    },
    S: {
      width: 32,
      height: 32,
    },
  });

  const realStateLogo = StyleSheet.create({
    width: 50,
    height: 50,
  });

  const containerCaracts = StyleSheet.create({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const containerCH = StyleSheet.create({
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  });

  const containerCaractsColumn = StyleSheet.create({
    flexDirection: 'column',
    justifyContent: 'space-between',
  });

  const containerMargin = StyleSheet.create({
    margin: 5,
  });

  const fontH1 = StyleSheet.create({
    L: {
      color: Theme.colors.BLACK,
      fontSize: Theme.fonts.SM,
      marginTop: 5,
      marginBottom: 5,
    },
    M: {
      color: Theme.colors.PLACEHOLDER,
      fontSize: Theme.fonts.SM,
    },
    S: {
      color: Theme.colors.PLACEHOLDER,
      fontSize: Theme.fonts.SM,
    },
  });

  const fontCH = StyleSheet.create({
    L: {
      color: Theme.colors.BLACK,
    },
    S: {
      color: Theme.colors.BLACK,
    },
  });

  const fontDescription = StyleSheet.create({
    color: Theme.colors.BLACK,
    margin: 5,
  });

  const fontPrice = StyleSheet.create({
    L: {
      color: Theme.colors.PRIMARY,
      fontSize: Theme.fonts.M,
      fontWeight: Theme.fonts.BOLD,
      marginLeft: 5,
    },
    M: {
      color: Theme.colors.PRIMARY,
      fontSize: Theme.fonts.M,
      fontWeight: Theme.fonts.BOLD,
      marginLeft: 5,
    },
    S: {
      color: Theme.colors.PRIMARY,
      fontSize: Theme.fonts.S,
      fontWeight: Theme.fonts.BOLD,
    },
  });

  const fontExpenses = StyleSheet.create({
    fontSize: Theme.fonts.S,
  });

  const favLocation = StyleSheet.create({
    L: {
      position: 'absolute',
      right: 16,
      top: -180,
    },
    S: {
      position: 'absolute',
      right: 8,
      top: -160,
    },
  });

  const prettifyCurrency = () => {
    if (currency === 'peso') {
      return 'ARS';
    } else {
      return 'USD';
    }
  };

  const manageFavButton = () => {
    if (favButton) {
      return addedFav ? (
        <Pressable onPress={onPressUnFav} styles={favLocation[size]}>
          <IMAGES.SVG.FAV_BUTTON_ADDED
            style={[favStyle[size], favLocation[size]]}
          />
        </Pressable>
      ) : (
        <Pressable onPress={onPressAddFav} styles={favLocation[size]}>
          <IMAGES.SVG.FAV_BUTTON_NOT_ADDED
            style={[favStyle[size], favLocation[size]]}
          />
        </Pressable>
      );
    }
    return null;
  };

  const manageStatus = () => {
    if (status === 'reservada') {
      return (
        <View styles={favLocation[size]}>
          <IMAGES.SVG.RESERVADO style={[favStyle[size], favLocation[size]]} />
        </View>
      );
    } else if (status === 'alquilada - vendida') {
      if (rentOrSale === 'alquiler') {
        return (
          <View styles={favLocation[size]}>
            <IMAGES.SVG.ALQUILADO style={[favStyle[size], favLocation[size]]} />
          </View>
        );
      } else {
        return (
          <View styles={favLocation[size]}>
            <IMAGES.SVG.VENDIDO style={[favStyle[size], favLocation[size]]} />
          </View>
        );
      }
    }
    return null;
  };

  if (size === 'L') {
    return (
      <View style={[generalContainer, containerSizes[size]]}>
        <Pressable onPress={onPress}>
          <Image source={image} style={[photoGeneral, photo[size]]} />
          {manageFavButton()}
          <View style={[containerCaracts, containerMargin]}>
            <View>
              <Text style={fontH1[size]}>{ubication}</Text>
              <View style={containerCaracts}>
                <View style={containerCaracts}>
                  <IMAGES.SVG.DOOR style={icons[size]} />
                  <Text style={fontCH[size]}>{amb + ' ' + i18n.t('amb')}</Text>
                </View>
                <View style={containerCaracts}>
                  <IMAGES.SVG.BED style={icons[size]} />
                  <Text style={fontCH[size]}>
                    {dorm + ' ' + i18n.t('dorm')}
                  </Text>
                </View>
                <View style={containerCaracts}>
                  <IMAGES.SVG.SHOWER style={icons[size]} />
                  <Text style={fontCH[size]}>
                    {bath + ' ' + i18n.t('bathrooms')}
                  </Text>
                </View>
                <View style={containerCaracts}>
                  <IMAGES.SVG.RULER style={icons[size]} />
                  <Text style={fontCH[size]}>{m2 + ' ' + i18n.t('m2')}</Text>
                </View>
              </View>
            </View>
            <Image source={logoRealState} style={realStateLogo} />
          </View>
          <Text style={fontDescription}>{description}</Text>
          <Text style={fontPrice[size]}>
            {currency} {price}
            {expenses ? (
              <Text style={fontExpenses}>
                {' + ' + prettifyCurrency(expenseCurrency) + ' ' + expenses}
              </Text>
            ) : null}
          </Text>
        </Pressable>
      </View>
    );
  } else if (size === 'M') {
    return (
      <View style={[generalContainer, containerSizes[size]]}>
        <Pressable onPress={onPress}>
          <Image source={image} style={[photoGeneral, photo[size]]} />
          <View style={[containerCaracts, containerMargin]}>
            <Text style={fontH1[size]}>{tittle + ', ' + ubication}</Text>
          </View>
          <Text style={fontPrice[size]}>
            {currency} {price}
            {expenses ? (
              <Text style={fontExpenses}>
                {' + ' + prettifyCurrency(expenseCurrency) + ' ' + expenses}
              </Text>
            ) : null}
          </Text>
        </Pressable>
      </View>
    );
  } else {
    //El por defecto "S" y cualquiera que se ingrese con otro valor invalido cae aca
    return (
      <View style={[generalContainer, containerSizes[size]]}>
        <Pressable onPress={onPress}>
          <Image source={image} style={[photoGeneral, photo[size]]} />
          {manageFavButton()}
          {manageStatus()}
          <View style={containerCaracts}>
            <View style={containerCaractsColumn}>
              <Text style={fontH1[size]}>{ubication}</Text>
              <Text style={fontPrice[size]}>
                {currency} {price}
              </Text>
            </View>
            <View style={containerCaractsColumn}>
              <View style={containerCH}>
                <IMAGES.SVG.DOOR style={icons[size]} />
                <Text style={fontCH[size]}>{amb + ' ' + i18n.t('amb')}</Text>
              </View>
              <View style={containerCH}>
                <IMAGES.SVG.RULER style={icons[size]} />
                <Text style={fontCH[size]}>{m2 + ' ' + i18n.t('m2')}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
};

export default CardState;
