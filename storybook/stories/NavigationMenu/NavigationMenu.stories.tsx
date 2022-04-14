import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NavigationMenu from '../../../src/containers/NavigationMenu/NavigationMenu';
import type { UrlText } from '../../../src/components/Url/Url';
import DefaultViewStyle from '../../../src/styles/DefaultViewStyle';

const urls: UrlText[] = [
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
storiesOf('Navigation Menu', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Demo', () => (
    <DefaultViewStyle
      backgroundColor="white"
      borderRadius={4}
      padding={10}
      flex={1}
    >
      <NavigationMenu
        externalUrls={urls}
        accessibilityLabel="React Native Documentation Links"
        menuTitle="Navigation Container"
        withUrlHint
        itemFlex={1}
        itemBackgroundColor="white"
        itemBorderRadius={4}
        itemBorderColor="black"
        itemPadding={20}
        itemMargin={10}
        itemBorderWidth={2}
      />
    </DefaultViewStyle>
  ));
