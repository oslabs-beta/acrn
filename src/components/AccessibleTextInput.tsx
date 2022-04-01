import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, ViewProps } from 'react-native';

interface Props extends ViewProps {
  setCredentialsAreSubmittable?: (bool: boolean) => void;
}

const editableTextInputColor = '#494949';
const disabledTextInputColor = '#BBB';
const focusedInputColor = 'green';
const minimumTouchableSize = 48;

function AccessibleTextInput(props: Props) {
  const { setCredentialsAreSubmittable } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editable, setEditable] = useState(true);
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
    },
    input: {
      backgroundColor: '#FFF',
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

export default AccessibleTextInput;
