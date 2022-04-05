import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import IconProfileContainer from '../../../src/containers/IconProfileContainer';

storiesOf('IconProfile', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('IconProfile', () => <IconProfileContainer uri = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png' text = 'Bob'/>);