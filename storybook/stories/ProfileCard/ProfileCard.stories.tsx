import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import ProfileCard from '../../../src/containers/ProfileCard/ProfileCard';

storiesOf('Profile Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Demo', () => (
    <ProfileCard
      uri="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png"
      buttonText="Ekans"
      height={100}
      width={100}
      padding={50}
      accessibilityHint="Tap to view Profile"
      imageHint="Ekans is a purple, serpentine Pokémon"
      imageBackgroundColor="white"
      imageBorderColor="black"
      imageMargin={5}
      imagePadding={5}
      imageBorderRadius={100}
      imageBorderWidth={2}
    />
  ));
