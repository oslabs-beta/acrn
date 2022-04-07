import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { StyleSheet } from 'react-native';
import CoreTextInput from '../../../src/components/core/CoreTextInput';


const testStyle = StyleSheet.create({
  input: {
    color: 'orange',
  },
  label: {
    color: 'orange'
  },
});

storiesOf('CoreTextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Core Text input', () => <CoreTextInput placeholderText='test'/>);
