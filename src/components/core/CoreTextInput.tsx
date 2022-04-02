/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Text,
  TextStyle,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextProps
} from 'react-native';

const editableTextInputColor = '#494949';
const disabledTextInputColor = '#BBB';
const focusedInputColor = 'blue';
const minimumTouchableSize = 48;

interface Props extends TextInputProps , TextProps {
  /** Pass along stylesheet in props */
  //TODO: CHANGE STYLE TYPE FOR A STYLESHEET.CREATE StyleProp<TextStyle>
  style?: any;
  /** Pass along label and placeholder props for input */
  labelText?: string;
  placeholderText?: string;
}

function CoreTextInput(props: Props) {
  const { labelText , placeholderText, style , ...rest } = props;
  
    //rest [asdf, asdf, asdf, asdf,]
  const [value, setValue] = useState('');
  /** We allow user to disable text input (can be useful because disabled
   * text inputs don't get submitted) */
  const [editable, setEditable] = useState(true);
  const [valueIsFocused, setValueIsFocused] = useState(false);
  const textInputColor = editable
    ? editableTextInputColor
    : disabledTextInputColor;
  const accessibilityState = { disabled: !editable };

  /** Default Stylesheet */
  const defaultStyle = StyleSheet.create({
    label: {
      color: valueIsFocused ? focusedInputColor : textInputColor,
    },
    input: {
      backgroundColor: '#FFF',
      padding: 8,
      height: minimumTouchableSize,
      width: '100%',
      borderColor: valueIsFocused ? focusedInputColor : textInputColor,
      borderWidth: valueIsFocused ? 2 : 1,
      borderRadius: 4,
      marginTop: 8,
    },
  });

  



  // TODO: make label dynamic
  // TODO: make label position dynamic
  // TODO: make placeholder text dynamic
  return (
    <View
      accessible
      accessibilityLabel="Enter value and password"
      accessibilityState={accessibilityState}
    >
      <Text style={[defaultStyle.label, style.label]}>{labelText || 'Label Placeholder'}</Text>
      <TextInput
        style={[defaultStyle.input, style.input]}
        placeholder={placeholderText || 'Placeholder'}
        placeholderTextColor={textInputColor}
        value={value}
        onChangeText={(text) => setValue(text)}
        editable={editable}
        onFocus={() => setValueIsFocused(true)}
        onBlur={() => setValueIsFocused(false)}
      />
    </View>
  );
}

export default CoreTextInput;

