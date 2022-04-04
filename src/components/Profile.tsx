import React from 'react'
import { ImageProps, Image } from 'react-native'

interface ProfileProps extends ImageProps {
  uri: string
}

function Profile(props: ProfileProps) {
  const { uri } = props
  return (
    <Image source = {{uri}} />
  )
}

export default Profile