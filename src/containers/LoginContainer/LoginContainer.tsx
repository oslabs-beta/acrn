import React, { useState } from 'react';
import { View } from 'react-native';
import LoginForm from '../../components/LoginForm/LoginForm';
import Button from '../../components/Button/Button';

// TODO: refactor using CoreTextInput

function LoginContainer() {
  const [credentialsAreSubmittable, setCredentialsAreSubmittable] =
    useState(false);
  return (
    <View>
      <LoginForm
        setCredentialsAreSubmittable={(bool: boolean): void => {
          setCredentialsAreSubmittable(bool);
        }}
      />
      <Button
        text="Login"
        accessibilityElementsHidden={!credentialsAreSubmittable}
        importantForAccessibility={
          credentialsAreSubmittable ? 'yes' : 'no-hide-descendants'
        }
      />
    </View>
  );
}

export default LoginContainer;
