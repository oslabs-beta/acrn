import React from "react";
import { Pressable, PressableProps, Text, Linking, Alert } from "react-native";
import Profile from "../components/Profile";
import NewButton from "../components/NewButton";

interface Props extends PressableProps {
  uri: string;
  buttonText: string;
  height: number;
  width: number;
  padding?: number;
  outerFunc?: () => any; // ? Are args typ needed?
  innerFunc?: () => any;
  withUrlHint?: true;
  profileLabel?: string;
}

const handlePress = async (url: string): Promise<any> => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else Alert.alert(`Cannot open ${url}`);
};

function IconProfileContainer(props: Props) {
  const {
    uri,
    buttonText,
    height,
    width,
    padding,
    outerFunc,
    innerFunc,
    withUrlHint,
    profileLabel,
    accessibilityHint,
  } = props;
  return (
    <Pressable
      accessibilityLabel={buttonText}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      onPress={outerFunc || (() => handlePress(uri))}
      style={{ padding }}
    >
      <Profile
        accessibilityLabel={buttonText}
        source={{ uri }}
        height={height}
        width={width}
        withUrlHint={withUrlHint}
        callback={innerFunc}
        profileLabel={profileLabel}
      />
      <NewButton
        text={buttonText}
        importantForAccessibility="no-hide-descendants"
      />
    </Pressable>
  );
}

export default IconProfileContainer;
