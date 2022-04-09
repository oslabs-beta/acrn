import { PressableProps, Pressable, Text } from "react-native";
import React from "react";

interface Props extends PressableProps {
  text?: string
}

function NewButton(props: Props) {
  const { text } = props;
  return (
    <Pressable accessibilityRole="button" {...props}>
      <Text>{text}</Text>
    </Pressable>
  );
}

export default NewButton;
