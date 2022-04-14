import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import LoginForm from '../../../src/components/LoginForm/LoginForm';
import DefaultViewStyle from '../../../src/styles/DefaultViewStyle';

storiesOf('Login Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Demo', () => (
    <DefaultViewStyle backgroundColor="white" borderRadius={4} padding={10}>
      <LoginForm />
    </DefaultViewStyle>
  ));
