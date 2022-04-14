import React from 'react';
import { Pressable, PressableProps, Text, Linking, Alert } from 'react-native';

export type UrlText = [a: string, b: string]; // [0] -> Page Name: Will be rendered in <Text/>, [1] -> url: read in accessibilitHint

interface Props extends PressableProps {
  /**
   * array containing descriptive name and url
   */
  url: UrlText;
  /**
   * if true, URL will be screenread via accessibilityHint
   */
  withUrlHint?: boolean;
  itemFlex?: number;
  itemBackgroundColor?: string;
  itemBorderRadius?: number;
  itemBorderColor?: string;
  itemPadding?: number;
  itemMargin?: number;
  itemBorderWidth?: number;
}

/**
 * A component to show a single url item inside a navigation menu *
 *
 * ## Usage
 * ```js
 * import React from 'react';
 * import { Pressable, PressableProps, Text, Linking, Alert } from 'react-native';
 * import { Url } from 'acrn-rn';
 *
 * const [credentialsAreSubmittable, setCredentialsAreSubmittable] = useState(false);
 *
 * const MyComponent = () => (
 * <Url
 *   url={['React Native Docs', 'https://reactnative.dev/']}
 *   withUrlHint={true}
 *  />
 * )
 */

const handlePress = async (url: string): Promise<any> => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else Alert.alert(`Cannot open ${url}`);
};

function Url(props: Props) {
  const {
    url,
    withUrlHint,
    itemFlex,
    itemBackgroundColor,
    itemBorderRadius,
    itemBorderColor,
    itemPadding,
    itemMargin,
    itemBorderWidth,
  } = props;
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={url[0]}
      accessibilityHint={withUrlHint ? `Navigates to ${url[1]}` : ''}
      onPress={() => handlePress(url[1])}
      style={{
        flex: itemFlex,
        backgroundColor: itemBackgroundColor,
        borderRadius: itemBorderRadius,
        borderColor: itemBorderColor,
        padding: itemPadding,
        margin: itemMargin,
        borderWidth: itemBorderWidth,
      }}
    >
      <Text> {url[0]} </Text>
    </Pressable>
  );
}

export default Url;
