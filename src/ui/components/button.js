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

  function sizes(x) {
    let y;
    if (x === 'XL') {
      y = StyleSheet.create({
        width: 380,
        height: 112,
      });
    } else if (x === 'L') {
      y = StyleSheet.create({
        width: 380,
        height: 48,
      });
    } else if (x === 'S') {
      y = StyleSheet.create({
        width: 88,
        height: 20,
      });
    } else {
      // el "M" o si ingresan un valor "invalido" cae aca, que es el por defecto
      y = StyleSheet.create({
        width: 136,
        height: 48,
      });
    }
    return y;
  }

  function fontsSize(x) {
    let y;
    if (x === 'XL') {
      y = StyleSheet.create({
        fontSize: Theme.fonts.L,
        fontWeight: Theme.fonts.BOLD,
        textAlign: 'center',
      });
    } else if (x === 'L') {
      y = StyleSheet.create({
        fontSize: Theme.fonts.L,
        fontWeight: Theme.fonts.SEMIBOLD,
        textAlign: 'center',
      });
    } else if (x === 'S') {
      y = StyleSheet.create({
        fontSize: Theme.fonts.S,
        fontWeight: Theme.fonts.SEMIBOLD,
        textAlign: 'center',
      });
    } else {
      // el "M" o si ingresan un valor "invalido" cae aca, que es el por defecto
      y = StyleSheet.create({
        fontSize: Theme.fonts.M,
        fontWeight: Theme.fonts.SEMIBOLD,
        textAlign: 'center',
      });
    }
    return y;
  }

  function colorsNotPressed(x) {
    let y;
    if (x === 'secondary') {
      y = StyleSheet.create({
        backgroundColor: Theme.colors.SECONDARY,
      });
    } else if (x === 'secondary-transparent') {
      y = StyleSheet.create({
        borderColor: Theme.colors.PRIMARY,
      });
    } else if (x === 'secondary-inverted') {
      y = StyleSheet.create({
        borderWidth: 4,
        borderColor: Theme.colors.SECONDARY,
      });
    } else if (x === 'primary-transparent') {
      y = StyleSheet.create({
        backgroundColor: Theme.colors.WHITE,
      });
    } else if (x === 'primary-inverted') {
      y = StyleSheet.create({
        borderWidth: 4,
        borderColor: Theme.colors.PRIMARY,
      });
    } else {
      // el "primary" o si ingresan un valor "invalido" cae aca, que es el por defecto
      y = StyleSheet.create({
        backgroundColor: Theme.colors.PRIMARY,
      });
    }
    return y;
  }

  function colorsPressed(x) {
    let y;
    if (x === 'secondary') {
      y = StyleSheet.create({
        backgroundColor: Theme.colors.SECONDARY_PRESSED,
      });
    } else if (x === 'secondary-transparent') {
      y = StyleSheet.create({
        borderColor: Theme.colors.SECONDARY,
      });
    } else if (x === 'secondary-inverted') {
      y = StyleSheet.create({
        borderWidth: 4,
        borderColor: Theme.colors.SECONDARY_PRESSED,
      });
    } else if (x === 'primary-transparent') {
      y = StyleSheet.create({
        backgroundColor: Theme.colors.WHITE,
      });
    } else if (x === 'primary-inverted') {
      y = StyleSheet.create({
        borderWidth: 4,
        borderColor: Theme.colors.PRIMARY_PRESSED,
      });
    } else {
      // el "primary" o si ingresan un valor "invalido" cae aca, que es el por defecto
      y = StyleSheet.create({
        backgroundColor: Theme.colors.PRIMARY_PRESSED,
      });
    }
    return y;
  }

  function fontsColor(x) {
    let y;
    if (x === 'secondary') {
      y = StyleSheet.create({
        color: Theme.colors.WHITE,
      });
    } else if (x === 'secondary-transparent') {
      y = StyleSheet.create({
        color: Theme.colors.SECONDARY,
      });
    } else if (x === 'secondary-inverted') {
      y = StyleSheet.create({
        color: Theme.colors.SECONDARY,
      });
    } else if (x === 'primary-transparent') {
      y = StyleSheet.create({
        color: Theme.colors.PRIMARY,
      });
    } else if (x === 'primary-inverted') {
      y = StyleSheet.create({
        color: Theme.colors.PRIMARY,
      });
    } else {
      // el "primary" o si ingresan un valor "invalido" cae aca, que es el por defecto
      y = StyleSheet.create({
        color: Theme.colors.WHITE,
      });
    }
    return y;
  }

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        button,
        sizes(size),
        pressed ? colorsPressed(color) : colorsNotPressed(color),
      ]}>
      {image}
      <Text style={[fontsSize(size), fontsColor(color)]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
