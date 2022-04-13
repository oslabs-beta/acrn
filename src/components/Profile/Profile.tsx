import React from 'react';
import { ImageProps, Image, Pressable, PressableProps } from 'react-native';

type PressableWithoutStyleProps = Omit<PressableProps, 'style'>;
interface ProfileProps extends ImageProps, PressableWithoutStyleProps {
  height: number;
  width: number;
  withUrlHint?: true;
  profileLabel?: string;
  callback?: () => any;
  imageFlex?: number;
  imageBackgroundColor?: string;
  imageBorderRadius?: number;
  imageBorderColor?: string;
  imagePadding?: number;
  imageMargin?: number;
}

function Profile(props: ProfileProps) {
  const {
    source,
    height,
    width,
    callback,
    imageFlex,
    imageBackgroundColor,
    imageBorderRadius,
    imageBorderColor,
    imagePadding,
    imageMargin,
  } = props;
  return (
    <Pressable
      onPress={callback}
      style={{
        flex: imageFlex,
        backgroundColor: imageBackgroundColor,
        borderRadius: imageBorderRadius,
        borderColor: imageBorderColor,
        padding: imagePadding,
        margin: imageMargin,
        borderWidth: 2,
      }}
    >
      <Image source={source} style={{ width, height }} />
    </Pressable>
  );
}

export default Profile;
