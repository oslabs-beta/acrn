import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import LoginContainer from '../../../src/containers/LoginContainer';

storiesOf('AccessibleTextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Accessible Text input', () => <LoginContainer />);
