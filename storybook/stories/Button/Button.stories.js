import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';
import NewButton from '../../../src/components/NewButton';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <View>
      <Button onPress={action('clicked-text')}>
        <Text>{text('Button text', 'test Button')}</Text>
      </Button>

      <NewButton banana="hello"></NewButton>
    </View>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
