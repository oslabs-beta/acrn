import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import CoreTextInput from '../../../src/components/CoreTextInput/CoreTextInput';
import Styling from '../../../src/styles/GeneralViewStyles';

storiesOf('CoreTextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Core Text input', () => (
    <Styling backgroundColor="#D3D3D3" borderRadius={4} padding={10}>
      <CoreTextInput
        labelText="Sample Text Input"
        placeholderText="Enter text here"
      />
    </Styling>
  ));
