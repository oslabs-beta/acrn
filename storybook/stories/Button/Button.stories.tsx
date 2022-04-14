import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Button from '../../../src/components/Button/Button';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Demo', () => (
    <Button
      text="Button"
      onPressIn={() => console.log('onPressIn')}
      onPress={() => console.log('onPress')}
      onPressOut={() => console.log('onPressOut')}
      onLongPress={() => console.log('onLongPress')}
    />
  ));
