import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, ViewProps } from 'react-native';

interface Props extends ViewProps {
  /**
   * Function that toggles state of credentials
   */
  setCredentialsAreSubmittable?: (bool: boolean) => void;
}

/**
 * LoginForm can be used to toggle accessibility state between two text inputs
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { LoginForm, LoginForm } from 'acrn-rn';
 *
 * const [credentialsAreSubmittable, setCredentialsAreSubmittable] = useState(false);
 *
 * const MyComponent = () => (
 * <LoginForm
 *   setCredentialsAreSubmittable={(bool) => setCredentialsAreSubmittable(bool)}/>
 * );
 */

const editableTextInputColor = '#494949';
const disabledTextInputColor = '#BBB';
const backgroundColor = '#FFF';
const focusedInputColor = 'green';
const minimumTouchableSize = 48;

function LoginForm(props: Props) {
  const { setCredentialsAreSubmittable } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editable] = useState(true);
  const [usernameIsFocused, setUsernameIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const textInputColor = editable
    ? editableTextInputColor
    : disabledTextInputColor;
  const accessibilityState = { disabled: !editable };

  const styles_1 = StyleSheet.create({
    label: {
      color:
        usernameIsFocused || passwordIsFocused
          ? focusedInputColor
          : textInputColor,
      fontSize: 28,
    },
    input: {
      backgroundColor: backgroundColor,
      padding: 8,
      height: minimumTouchableSize,
      width: '100%',
      borderColor: usernameIsFocused ? focusedInputColor : textInputColor,
      borderWidth: usernameIsFocused ? 2 : 1,
      borderRadius: 4,
      marginTop: 8,
    },
  });

  const styles_2 = StyleSheet.create({
    input: {
      borderColor: passwordIsFocused ? focusedInputColor : textInputColor,
      borderWidth: passwordIsFocused ? 2 : 1,
    },
  });

  useEffect(() => {
    if (setCredentialsAreSubmittable)
      setCredentialsAreSubmittable(!!(username && password));
  });

  return (
    <View
      accessible
      accessibilityLabel="Enter username and password"
      accessibilityState={accessibilityState}
    >
      <Text style={styles_1.label}>Login</Text>
      <TextInput
        style={styles_1.input}
        placeholder="Username"
        placeholderTextColor={textInputColor}
        value={username}
        onChangeText={(text) => setUsername(text)}
        editable={editable}
        onFocus={() => setUsernameIsFocused(true)}
        onBlur={() => setUsernameIsFocused(false)}
      />
      <TextInput
        style={[styles_1.input, styles_2.input]}
        placeholder="Password"
        placeholderTextColor={textInputColor}
        value={password}
        onChangeText={(text) => setPassword(text)}
        editable={editable}
        onFocus={() => setPasswordIsFocused(true)}
        onBlur={() => setPasswordIsFocused(false)}
      />
    </View>
  );
}

export default LoginForm;
