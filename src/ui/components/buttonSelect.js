import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Theme from '../../styles/Theme';

const ButtonSelect = ({ text, borderRadius = 10, onPress, size = 'M', color = 'primaryInverted', image, selected }) => {
  const button = StyleSheet.create({
    margin: 4,
    borderRadius: borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  });

  const buttonSizes = StyleSheet.create({
    XL: {
      width: 380,
      height: 112,
    },
    L: {
      width: 160,
      height: 40,
    },
    M: {
      width: 110,
      height: 40,
    },
    S: {
      width: 88,
      height: 20,
    },
    XS: {
       width: 50,
      height: 50,
    },
    XXS: {
      width: 110,
      height: 40,
   },
   ORIENTACION: {
    width: 80,
    height: 40,
 },
  });

  const fontsSizes = StyleSheet.create({
    XL: {
      fontSize: Theme.fonts.L,
      fontWeight: Theme.fonts.BOLD,
      textAlign: 'center',
    },
    L: {
      fontSize: Theme.fonts.M,
      fontWeight: Theme.fonts.BOLD,
      textAlign: 'center',
    },
    M: {
      fontSize: Theme.fonts.M,
      fontWeight: Theme.fonts.BOLD,
      textAlign: 'center',
    },
    S: {
      fontSize: Theme.fonts.S,
      fontWeight: Theme.fonts.SEMIBOLD,
      textAlign: 'center',
    },
    XS: {
        fontSize: Theme.fonts.XS,
        fontWeight: Theme.fonts.SEMIBOLD,
        textAlign: 'center',
      },
    XXS: {
      fontSize: Theme.fonts.XXS,
      fontWeight: Theme.fonts.SEMIBOLD,
      textAlign: 'center',
    },
    ORIENTACION: {
      fontSize: Theme.fonts.M,
      fontWeight: Theme.fonts.BOLD,
      textAlign: 'center',
    },
  });

  const selectedColors = StyleSheet.create({
    primary: {
      borderWidth: 1,
      backgroundColor: Theme.colors.PRIMARY,
    },
    primaryInverted: {
      borderWidth: 1,
      borderColor: Theme.colors.PLACEHOLDER,
    },
    default: {
        borderWidth: 1,
        borderColor: Theme.colors.PLACEHOLDER,
    },
  });

  const unselectedColors = StyleSheet.create({
    primary: {
      backgroundColor: Theme.colors.PRIMARY,
    },
    primaryInverted: {
      borderWidth: 1,
      borderColor: Theme.colors.PRIMARY,
      backgroundColor: Theme.colors.PRIMARY,
    },
  });

  const fontsColor = StyleSheet.create({
    primary: {
      color: Theme.colors.BLACK,
    },
    primaryInverted: {
      color: Theme.colors.WHITE,
    },
  });

  const selectedFontsColor = StyleSheet.create({
    primary: {
      color: Theme.colors.WHITE,
    },
    primaryInverted: {
      color: Theme.colors.BLACK,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={[button, buttonSizes[size], selected ? selectedColors[color] : unselectedColors[color]]}
    >
      {image}
      <Text style={[fontsSizes[size], selected ? selectedFontsColor[color] : fontsColor[color]]}>{text}</Text>
    </Pressable>
  );
};

export default ButtonSelect;
