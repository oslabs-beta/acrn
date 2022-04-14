import { PressableProps, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props extends PressableProps {
  /**
   * text displayed inside button
   */
  text: string;
  accessibilityLabel?: string;
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
const backgroundColor = 'purple';
const textColor = 'white';
const defaultButtonStyle = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: backgroundColor,
    marginVertical: 5,
  },
  text: {
    fontWeight: 'bold',
    color: textColor,
    fontSize: 14,
  },
});

function NewButton(props: Props) {
  const { text, accessibilityLabel } = props;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || text}
      style={defaultButtonStyle.pressable}
      {...props}
    >
      <Text style={defaultButtonStyle.text}>{text ? text : 'Submit'}</Text>
    </Pressable>
  );
}

export default NewButton;
