import React from 'react';
import { Pressable, PressableProps, Linking, Alert } from 'react-native';
import PressableImage from '../../components/PressableImage/PressableImage';
import Button from '../../components/Button/Button';

interface Props extends PressableProps {
  uri: string;
  buttonText: string; //used as accessibility label for pressable
  height: number;
  width: number;
  padding?: number;
  outerFunc?: () => any;
  innerFunc?: () => any;
  imageHint?: string; //option hint to be read when image is screenread
  profileLabel?: string;
  imageFlex?: number;
  imageBackgroundColor?: string;
  imageBorderRadius?: number;
  imageBorderColor?: string;
  imagePadding?: number;
  imageMargin?: number;
  imageBorderWidth?: number;
}

const handlePress = async (url: string): Promise<any> => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else Alert.alert(`Cannot open ${url}`);
};

function ProfileCard(props: Props) {
  const {
    uri,
    buttonText,
    height,
    width,
    padding,
    outerFunc,
    accessibilityHint,
    imageHint,
    imageBackgroundColor,
    imageBorderRadius,
    imageBorderColor,
    imagePadding,
    imageMargin,
    imageBorderWidth,
  } = props;
  return (
    <Pressable
      accessibilityLabel={buttonText}
      accessibilityHint={accessibilityHint}
      onPress={outerFunc || (() => handlePress(uri))}
      style={{ padding }}
    >
      <PressableImage
        accessibilityHint={imageHint}
        source={{ uri }}
        height={height}
        width={width}
        callback={() => handlePress(uri)}
        imageBackgroundColor={imageBackgroundColor}
        imageBorderRadius={imageBorderRadius}
        imageBorderColor={imageBorderColor}
        imagePadding={imagePadding}
        imageMargin={imageMargin}
        imageBorderWidth={imageBorderWidth}
      />
      <Button
        text={buttonText}
        importantForAccessibility="no-hide-descendants"
      />
    </Pressable>
  );
}

export default ProfileCard;
