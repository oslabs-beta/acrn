import { PressableProps, Pressable, Text, StyleSheet } from "react-native";
import React from "react";

interface Props extends PressableProps {
  text?: string
}

const defaultButtonStyle = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: 'blue',
    marginVertical: 5
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14
  }
})

function NewButton(props: Props) {
  const { text } = props;
  return (
    <Pressable accessibilityRole="button" style = {props.style? props.style.pressable: defaultButtonStyle.pressable} {...props}>
      <Text style = {props.style? props.style.text: defaultButtonStyle.text }>{text ? text: 'Submit'}</Text>
    </Pressable>
  );
}

export default NewButton;

