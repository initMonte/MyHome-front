import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const Button = ({text, onPress, size = 'M', color = 'primary', image}) => {
  const button = StyleSheet.create({
    margin: 10,
    borderRadius: 10,
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
      width: 380,
      height: 48,
    },
    ML: {
      width: 230,
      height: 48,
    },
    M: {
      width: 136,
      height: 48,
    },
    S: {
      width: 88,
      height: 20,
    },
  });

  const fontsSizes = StyleSheet.create({
    XL: {
      fontSize: Theme.fonts.L,
      fontWeight: Theme.fonts.BOLD,
      textAlign: 'center',
    },
    L: {
      fontSize: Theme.fonts.L,
      fontWeight: Theme.fonts.BOLD,
      textAlign: 'center',
    },
    ML: {
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
  });

  const colorsNotPressed = StyleSheet.create({
    primary: {
      backgroundColor: Theme.colors.PRIMARY,
    },
    primaryInverted: {
      borderWidth: 4,
      borderColor: Theme.colors.PRIMARY,
    },
    primaryTransparent: {
      backgroundColor: Theme.colors.WHITE,
    },
    secondary: {
      backgroundColor: Theme.colors.SECONDARY,
    },
    secondaryInverted: {
      borderWidth: 4,
      borderColor: Theme.colors.SECONDARY,
    },
    secondaryTransparent: {
      backgroundColor: Theme.colors.WHITE,
    },
  });

  const colorsPressed = StyleSheet.create({
    primary: {
      backgroundColor: Theme.colors.PRIMARY_PRESSED,
    },
    primaryInverted: {
      borderWidth: 4,
      borderColor: Theme.colors.PRIMARY_PRESSED,
    },
    primaryTransparent: {
      backgroundColor: Theme.colors.WHITE,
    },
    secondary: {
      backgroundColor: Theme.colors.SECONDARY_PRESSED,
    },
    secondaryInverted: {
      borderWidth: 4,
      borderColor: Theme.colors.SECONDARY_PRESSED,
    },
    secondaryTransparent: {
      backgroundColor: Theme.colors.WHITE,
    },
  });

  const fontsColor = StyleSheet.create({
    primary: {
      color: Theme.colors.WHITE,
    },
    primaryInverted: {
      color: Theme.colors.PRIMARY,
    },
    primaryTransparent: {
      color: Theme.colors.PRIMARY,
    },
    secondary: {
      color: Theme.colors.WHITE,
    },
    secondaryInverted: {
      color: Theme.colors.SECONDARY,
    },
    secondaryTransparent: {
      color: Theme.colors.SECONDARY,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        button,
        buttonSizes[size],
        pressed ? colorsPressed[color] : colorsNotPressed[color],
      ]}>
      {image}
      <Text style={[fontsSizes[size], fontsColor[color]]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
