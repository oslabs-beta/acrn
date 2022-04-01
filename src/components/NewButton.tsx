import { PressableProps, Pressable, Text } from 'react-native';
import React from 'react';

function NewButton(props: PressableProps) {
  return (
    <Pressable {...props}>
      <Text> NewButton (Pressable Text in View) </Text>
    </Pressable>
  );
}

export default NewButton;
