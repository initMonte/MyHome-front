import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const InputText = ({
  placeholder,
  size = 'XL',
  keyboard = 'default',
  hideText = false,
  borderWidth = 0,
  borderRadius = 0,
  height = 40,
  changeValue,
  ogValue = '',
}) => {
  const [input, onChangeInput] = React.useState(ogValue);
  const [focus, onChangeFocus] = React.useState(false);

  const generalStyle = StyleSheet.create({
    height: height,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderWidth: borderWidth,
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.BOLD,
    borderRadius: borderRadius,
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
        borderColor: Theme.colors.PRIMARY,
        borderBottomWidth: 2,
      });
    }
    return y;
  }

  return (
    <TextInput
      style={[generalStyle, inputSizes[size], inputFocused()]}
      onChangeText={text => {
        onChangeInput(text);
        changeValue(text);
      }}
      value={input}
      onFocus={() => onChangeFocus(true)}
      onBlur={() => onChangeFocus(false)}
      placeholder={placeholder}
      placeholderTextColor={Theme.colors.PLACEHOLDER}
      keyboardType={keyboard}
      secureTextEntry={hideText}
      textAlignVertical={'top'}
    />
  );
};

export default InputText;
