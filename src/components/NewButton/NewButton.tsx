import { PressableProps, Pressable, Text } from 'react-native';
import React from 'react';

interface Props extends PressableProps {
  /**
   * text displayed inside button
   */
  text?: string;
}

/**
 * ## Usage
 * ```js
 * import React from 'react';
 * import { PressableProps, Pressable, Text } from 'react-native';
 * import { NewButton } from 'acrn-rn';
 *
 * const [credentialsAreSubmittable, setCredentialsAreSubmittable] = useState(false);
 *
 * const MyComponent = () => (
 *   <NewButton
 *    text = 'New Button'
 *    onPressIn={() => console.log('onPressIn')}
 *    onPress={() => console.log('onPress')}
 *    onPressOut={() => console.log('onPressOut')}
 *    onLongPress={() => console.log('onLongPress')}/>
 * )
 */

function NewButton(props: Props) {
  const { text } = props;
  return (
    <Pressable accessibilityRole="button" {...props}>
      <Text>{text}</Text>
    </Pressable>
  );
}

export default NewButton;
