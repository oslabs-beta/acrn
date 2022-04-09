import React from 'react';
import { Pressable, PressableProps, Text, Linking, Alert } from 'react-native';

// TODO: Move type decalarations to separate file

export type Url = [a: string, b: string]; // [0] -> Page Name: Will be rendered in <Text/>, [1] -> url: read in accessibilitHint

interface Props extends PressableProps {
  url: Url;
  withUrlHint?: boolean; // if true, URL will be screenread via accessibilityHint
}

const handlePress = async (url: string): Promise<any> => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else Alert.alert(`Cannot open ${url}`);
};

function ExternalUrl(props: Props) {
  const { url, withUrlHint } = props;
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={url[0]}
      accessibilityHint={withUrlHint ? `Navigates to ${url[1]}` : ''}
      onPress={() => handlePress(url[1])}
    >
      <Text> {url[0]} </Text>
    </Pressable>
  );
}

export default ExternalUrl;
