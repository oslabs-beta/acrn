import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import Profile from "../components/Profile";
import NewButton from "../components/NewButton";

interface Props extends PressableProps {
  uri: string;
  text: string;
  height: number;
  width: number;
  padding?: number;
  outerFunc?: () => any; // ? Are args typ needed?
  innerFunc?: () => any;
}

function IconProfileContainer(props: Props) {
  const { uri, text, height, width, padding, outerFunc, innerFunc } = props;
  return (
    <Pressable onPress={outerFunc} style={{ padding }}>
      <Profile
        source={{ uri }}
        height={height}
        width={width}
        callback={innerFunc}
      />
      <NewButton text={text} />
    </Pressable>
  );
}

export default IconProfileContainer;
