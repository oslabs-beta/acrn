import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import IconProfileContainer from '../../../src/containers/IconProfileContainer/IconProfileContainer';

storiesOf('IconProfile', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('IconProfile', () => (
    <IconProfileContainer
      uri="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png"
      buttonText="Ekans"
      height={100}
      width={100}
      padding={50}
      accessibilityHint="Tap to view Profile"
      imageHint="Tap to visit image U.R.L."
      imageBackgroundColor="white"
      imageBorderColor="black"
      imageMargin={5}
      imagePadding={5}
      imageBorderRadius={100}
      imageBorderWidth={2}
    />
  ));
