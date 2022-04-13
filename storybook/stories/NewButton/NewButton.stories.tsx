import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NewButton from '../../../src/components/NewButton/NewButton';

storiesOf('NewButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('New Button', () => (
    <NewButton
      onPressIn={() => console.log('onPressIn')}
      onPress={() => console.log('onPress')}
      onPressOut={() => console.log('onPressOut')}
      onLongPress={() => console.log('onLongPress')}
    />
  ));
