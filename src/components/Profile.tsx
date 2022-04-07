import React from "react";
import { ImageProps, Image, Pressable, PressableProps } from "react-native";

type PressableWithoutStyleProps = Omit<PressableProps, "style">;
interface ProfileProps extends ImageProps, PressableWithoutStyleProps {
  height: number;
  width: number;
  callback?: () => any;
}

function Profile(props: ProfileProps) {
  const { source, height, width, callback } = props;
  return (
    <Pressable onPress={callback}>
      <Image source={source} style={{ width, height }} />
    </Pressable>
  );
}

export default Profile;
