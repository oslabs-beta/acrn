import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NavigationMenu from '../../../src/containers/NavigationContainer';
import type { Url } from '../../../src/components/ExternalUrl';
const urls: Url[] = [
  ['click this', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
];

storiesOf('ExampleApp', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Core Text input', () => (
    <NavigationMenu
      accessibilityLabel="Screen Stack Navigator"
      externalUrls={urls}
    />
  ));
