import React from "react";
import {
  ImageProps,
  Image,
  Pressable,
  PressableProps,
  Linking,
  Alert,
} from "react-native";

type PressableWithoutStyleProps = Omit<PressableProps, "style">;
interface ProfileProps extends ImageProps, PressableWithoutStyleProps {
  height: number;
  width: number;
  accessibilityLabel: string;
  withUrlHint?: true;
  callback?: () => any;
  profileLabel?: string;
}
const handlePress = async (url: string): Promise<any> => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else Alert.alert(`Cannot open ${url}`);
};

function Profile(props: ProfileProps) {
  const {
    source,
    height,
    width,
    callback,
    withUrlHint,
    profileLabel,
    accessibilityLabel,
  } = props;

  return (
    <Pressable
      accessibilityLabel={profileLabel || accessibilityLabel}
      accessibilityRole="imagebutton"
      onPress={callback || (() => handlePress(source.uri))}
      accessibilityHint={withUrlHint ? `Navigate to image U.R.L.` : ""}
    >
      <Image source={source} style={{ width, height }} />
    </Pressable>
  );
}

export default Profile;
