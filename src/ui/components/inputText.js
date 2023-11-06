import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Theme from '../../styles/Theme';
import IMAGES from '../../assets/images/images';

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
  error = false,
  flex = 0,
  innerRef = false,
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
    flex: flex,
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
    CUSTOM_L: {
      width: 300,
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
    <View style={{marginBottom: error ? 30 : 0}}>
      {innerRef ? (
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
          ref={innerRef}
        />
      ) : (
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
      )}
      {error && (
        <Text
          style={{color: 'red', position: 'absolute', bottom: -15, left: 20}}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputText;
