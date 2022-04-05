import React from 'react';
import { View, ViewProps, Text } from 'react-native';
import Profile from '../components/Profile';
import Icon from '../components/Icon';

interface Props extends ViewProps {
  uri: string,
  text: string
}

function IconProfileContainer(props: Props) {
  const { uri, text } = props
  return(
    <View>
      <Icon text = { text }/>
      <Profile uri = { uri } source={{uri}}/>
    </View>
  )
}

export default IconProfileContainer;