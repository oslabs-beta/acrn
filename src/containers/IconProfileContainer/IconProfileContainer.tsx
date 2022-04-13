import React from 'react';
import { Pressable, PressableProps, Linking, Alert } from 'react-native';
import Profile from '../../components/Profile/Profile';
import NewButton from '../../components/NewButton/NewButton';

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
  imageFlex?: number;
  imageBackgroundColor?: string;
  imageBorderRadius?: number;
  imageBorderColor?: string;
  imagePadding?: number;
  imageMargin?: number;
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
    imageFlex,
    imageBackgroundColor,
    imageBorderRadius,
    imageBorderColor,
    imagePadding,
    imageMargin,
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
        imageFlex={imageFlex}
        imageBackgroundColor={imageBackgroundColor}
        imageBorderRadius={imageBorderRadius}
        imageBorderColor={imageBorderColor}
        imagePadding={imagePadding}
        imageMargin={imageMargin}
      />
      <NewButton
        text={buttonText}
        importantForAccessibility="no-hide-descendants"
      />
    </Pressable>
  );
}

export default IconProfileContainer;
