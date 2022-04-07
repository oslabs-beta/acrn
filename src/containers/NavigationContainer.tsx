import React from "react";
import { View, ViewProps, Text } from "react-native";
import ExternalUrl from "../components/ExternalUrl";
import { Url } from "../components/ExternalUrl";

// TODO: Create InternalLink Component

/*
 * example for url type
 * const urls: url[] = [['a','b'], ['d', 'd']];
 * const url2: Array<url> = [['a','b'], ['c', 'd']];
 */
interface Props extends ViewProps {
  externalUrls: Url[]; // array of URLs + page names to pass to child components
  accessibilityLabel: string; // text to be screenread when View is selected
  menuTitle?: string; // optional title to display over menu
  withUrlHint?: true; // optional boolean if accessibility hints are desired for children
  // Styling?: StyleSheet;
}

function NavigationContainer(props: Props) {
  const { externalUrls, withUrlHint, menuTitle, accessibilityLabel } = props;
  const urls = [];
  for (let i = 0; i < externalUrls.length; i += 1) {
    urls.push(
      <ExternalUrl
        key={`url ${i}`}
        url={externalUrls[i]}
        withUrlHint={withUrlHint}
      />
    );
  }
  // ? Consider using ScrollView
  if (menuTitle) {
    return (
      <View accessibilityLabel={accessibilityLabel} accessibilityRole="menu">
        <Text accessibilityRole="header"> {menuTitle} </Text>
        {urls}
      </View>
    );
  }
  return (
    <View accessibilityLabel={accessibilityLabel} accessibilityRole="menu">
      {urls}
    </View>
  );
}

export default NavigationContainer;
