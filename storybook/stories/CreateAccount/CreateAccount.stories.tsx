import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import CreateAccount from '../../../src/containers/CreateAccount/CreateAccount';

storiesOf('Create Account', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Create Account', () => <CreateAccount />);
