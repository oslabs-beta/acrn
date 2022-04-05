import React from 'react'
import { ImageProps, Image, Pressable, PressableProps } from 'react-native'


type PressableWithoutStyleProps = Omit<PressableProps, "style">
// type ImageWithoutSourceProps = Omit<ImageProps, "source">
interface ProfileProps extends ImageProps, PressableWithoutStyleProps{
  uri: string,
  height: number,
  width: number,
  callback?: () => any;
}

function Profile(props: ProfileProps) {
  const { uri, height, width, callback } = props
  return (
    <Pressable onPress={callback}>
      <Image source = {{uri}} style={{width, height}}/>
    </Pressable>
  )
}

export default Profile