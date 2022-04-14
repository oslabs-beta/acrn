import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import CoreTextInput from '../../../src/components/CoreTextInput/CoreTextInput';
import DefaultViewStyle from '../../../src/styles/DefaultViewStyle';

storiesOf('Text Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Demo', () => (
    <DefaultViewStyle borderRadius={4} padding={10}>
      <CoreTextInput
        labelText="Sample Text Input"
        placeholderText="Enter text here"
      />
    </DefaultViewStyle>
  ));
