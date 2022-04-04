import React from 'react'
import { PressableProps, Pressable } from 'react-native'

interface IconProps extends PressableProps {
  text: string // text for the icon
}

function Icon(props: IconProps) {
  const { text } = props
  return (
    <Pressable>
      {text}
    </Pressable>
  )
}

export default Icon