import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Welcome from '.';

storiesOf('Welcome', module).add('to acrn-rn', () => (
  <Welcome showApp={linkTo('Button')} />
));
