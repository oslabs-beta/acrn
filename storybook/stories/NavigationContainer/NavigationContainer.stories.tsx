import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NavigationContainer from '../../../src/containers/NavigationContainer';
import { Url } from '../../../src/components/ExternalUrl';

const urls: Url[] = [
  ['React Native Docs', 'https://reactnative.dev/'],
  [
    'React Native Components',
    'https://reactnative.dev/docs/components-and-apis',
  ],
  [
    'React Native Accessibility Guide',
    'https://reactnative.dev/docs/accessibility',
  ],
  ['React Native APIs', 'https://reactnative.dev/docs/accessibilityinfo'],
];
storiesOf('NavigationContainer', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Navigation Container', () => (
    <NavigationContainer
      externalUrls={urls}
      menuTitle="Navigation Container"
      accessibilityLabel="React Native Documentation Links"
      withUrlHint
    />
  ));
