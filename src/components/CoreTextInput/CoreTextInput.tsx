/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextProps,
} from 'react-native';

// TODO: if we have time, pull out default styles to keep code DRY
const editableTextInputColor = '#494949';
const disabledTextInputColor = '#BBB';
const focusedInputColor = 'blue';
const minimumTouchableSize = 48;
const backgroundColor = '#FFF';

interface Props extends TextInputProps, TextProps {
  /** Pass along stylesheet in props */
  //TODO: CHANGE STYLE TYPE FOR A STYLESHEET.CREATE StyleProp<TextStyle>
  /** Pass along label and placeholder props for input */
  labelText?: string;
  placeholderText?: string;
  // changeEditable?: boolean;
  // TODO: find a way to avoid this any
  style?: any;
}

const CoreTextInput = React.forwardRef<TextInput, Props>(
  (
    {
      labelText = 'Label Placeholder',
      placeholderText = 'Placeholder',
      accessibilityLabel = 'Accessible Text Input',
      // changeEditable = true,
      style,
      ...rest
    }: Props,
    ref
  ) => {
    const [value, setValue] = useState('');
    /** We allow user to disable text input (can be useful because disabled
     * text inputs don't get submitted) */
    const [editable, setEditable] = useState(true);
    const [valueIsFocused, setValueIsFocused] = useState(false);
    const textInputColor = editable
      ? editableTextInputColor
      : disabledTextInputColor;
    const accessibilityState = { disabled: !editable };

    useEffect(() => {
      if (rest.editable === false) {
        setEditable(false);
      }
    }, [rest.editable]);

    /** Default Stylesheet */
    const defaultStyle = StyleSheet.create({
      label: {
        color: valueIsFocused ? focusedInputColor : textInputColor,
      },
      input: {
        backgroundColor: backgroundColor,
        padding: 8,
        height: minimumTouchableSize,
        minWidth: 150,
        borderColor: valueIsFocused ? focusedInputColor : textInputColor,
        borderWidth: valueIsFocused ? 2 : 1,
        borderRadius: 4,
        marginTop: 8,
      },
    });

    const handleChangeText = (text: string) => {
      if (!editable) {
        return;
      }
      setValue(text);
      rest.onChangeText?.(text);
    };

    return (
      <View
        accessible
        accessibilityLabel={accessibilityLabel}
        accessibilityState={accessibilityState}
      >
        <Text
          style={style ? [defaultStyle.label, style.label] : defaultStyle.label}
        >
          {labelText}
        </Text>
        <TextInput
          ref={ref}
          style={style ? [defaultStyle.input, style.input] : defaultStyle.input}
          placeholder={rest.placeholder ? rest.placeholder : placeholderText}
          placeholderTextColor={textInputColor}
          value={rest.value ? rest.value : value}
          onChangeText={handleChangeText}
          editable={editable}
          onFocus={() => setValueIsFocused(true)}
          onBlur={() => setValueIsFocused(false)}
          {...rest}
        />
      </View>
    );
  }
);

export default CoreTextInput;
