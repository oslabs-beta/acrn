import React from 'react'
import { ImageProps, Image } from 'react-native'

interface ProfileProps extends ImageProps {
  uri: string // link to image
}

function Profile(props: ProfileProps) {
  const { uri } = props
  return (
    <Image source = {{uri}} style={{width: 400, height: 400}} />
  )
}

export default Profile