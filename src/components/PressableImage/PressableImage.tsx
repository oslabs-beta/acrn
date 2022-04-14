import React from 'react';
import { ImageProps, Image, Pressable, PressableProps } from 'react-native';

type PressableWithoutStyleProps = Omit<PressableProps, 'style'>;
interface ProfileProps extends ImageProps, PressableWithoutStyleProps {
  height: number;
  width: number;
  callback?: () => any;
  imageFlex?: number;
  imageBackgroundColor?: string;
  imageBorderRadius?: number;
  imageBorderColor?: string;
  imagePadding?: number;
  imageMargin?: number;
  imageBorderWidth?: number;
}

function PressableImage(props: ProfileProps) {
  const {
    accessibilityLabel,
    accessibilityHint,
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
    imageBorderWidth,
  } = props;
  return (
    <Pressable
      onPress={callback}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      style={{
        flex: imageFlex,
        backgroundColor: imageBackgroundColor,
        borderRadius: imageBorderRadius,
        borderColor: imageBorderColor,
        padding: imagePadding,
        margin: imageMargin,
        borderWidth: imageBorderWidth,
      }}
    >
      <Image source={source} style={{ width, height }} />
    </Pressable>
  );
}

export default PressableImage;
