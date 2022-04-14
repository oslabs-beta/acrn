import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import CreateAccount from '../../../src/containers/CreateAccount/CreateAccount';
import DefaultViewStyle from '../../../src/styles/DefaultViewStyle';

storiesOf('Create Account', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Demo', () => (
    <DefaultViewStyle  borderRadius={4} padding={10}>
      <CreateAccount accessibilityLabel="Create an Account" />
    </DefaultViewStyle>
  ));
