import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const InputText = ({
  placeholder,
  size = 'XXL',
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

  function sizes(x) {
    let y;
    if (x === 'XL') {
      y = StyleSheet.create({
        width: 320,
      });
    } else if (x === 'L') {
      y = StyleSheet.create({
        width: 240,
      });
    } else if (x === 'S') {
      y = StyleSheet.create({
        width: 100,
      });
    } else if (x === 'XS') {
      y = StyleSheet.create({
        width: 72,
      });
    } else {
      y = StyleSheet.create({
        width: 340,
      });
    }
    return y;
  }

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
      style={[generalStyle, sizes(size), inputFocused()]}
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
