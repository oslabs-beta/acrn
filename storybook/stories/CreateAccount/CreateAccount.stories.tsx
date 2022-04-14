import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import CreateAccount from '../../../src/containers/CreateAccount/CreateAccount';
import Styling from '../../../src/styles/GeneralViewStyles';

storiesOf('Create Account', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Create Account', () => (
    <Styling backgroundColor="#D3D3D3" borderRadius={4} padding={10}>
      <CreateAccount accessibilityLabel="Create Account" />
    </Styling>
  ));
