import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import LoginContainer from '../../../src/containers/LoginContainer/LoginContainer';
import Styling from '../../../src/styles/GeneralViewStyles';

storiesOf('AccessibleTextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Accessible Text input', () => (
    <Styling backgroundColor="white" borderRadius={4} padding={10}>
      <LoginContainer />
    </Styling>
  ));
