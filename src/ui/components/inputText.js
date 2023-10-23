import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const InputText = ({
  placeholder,
  size = 'XL',
  keyboard = 'default',
  hideText = false,
}) => {
  const [input, onChangeInput] = React.useState('');
  const [focus, onChangeFocus] = React.useState(false);

  const generalStyle = StyleSheet.create({
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.BOLD,
  });

  const inputSizes = StyleSheet.create({
    XL: {
      width: 340,
    },
    L: {
      width: 320,
    },
    M: {
      width: 240,
    },
    S: {
      width: 100,
    },
    XS: {
      width: 72,
    },
  });

  function inputFocused() {
    let y;
    if (focus) {
      y = StyleSheet.create({
        borderBottomColor: Theme.colors.PRIMARY,
        borderBottomWidth: 2,
      });
    }
    return y;
  }

  return (
    <TextInput
      style={[generalStyle, inputSizes[size], inputFocused()]}
      onChangeText={onChangeInput}
      value={input}
      onFocus={() => onChangeFocus(true)}
      onBlur={() => onChangeFocus(false)}
      placeholder={placeholder}
      placeholderTextColor={Theme.colors.PLACEHOLDER}
      keyboardType={keyboard}
      secureTextEntry={hideText}
    />
  );
};

export default InputText;
