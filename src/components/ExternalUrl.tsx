import React from 'react';
import { Pressable, PressableProps, Text, Linking, Alert } from 'react-native';
import { url } from '../containers/NavigationContainer';

interface Props extends PressableProps {
  url: url;
}

const handlePress = async (url: string): Promise<any> => {
  const supported = await Linking.canOpenURL(url);
  supported ? await Linking.openURL(url) : Alert.alert(`Cannot open ${url}`);
};

function ExternalUrl(props: Props) {
  const { url } = props;
  return (
    <Pressable accessibilityRole="link" onPress={() => handlePress(url[1])}>
      <Text> {url[0]} </Text>
    </Pressable>
  );
}

export default ExternalUrl;
