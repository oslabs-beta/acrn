import React, { useState } from 'react';
import { View } from 'react-native';
import AccessibleTextInput from '../../components/AccessibleTextInput/AccessibleTextInput';
import NewButton from '../../components/NewButton/NewButton';

// TODO: refactor using CoreTextInput

function LoginContainer() {
  const [credentialsAreSubmittable, setCredentialsAreSubmittable] =
    useState(false);
  return (
    <View>
      <AccessibleTextInput
        setCredentialsAreSubmittable={(bool: boolean): void => {
          setCredentialsAreSubmittable(bool);
        }}
      />
      <NewButton
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
