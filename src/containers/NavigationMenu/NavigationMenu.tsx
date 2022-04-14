import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ViewProps,
  Text,
  StatusBar,
} from 'react-native';
import Url from '../../components/Url/Url';
import type { UrlText } from '../../components/Url/Url';

/*
 * example for url type
 * const urls: url[] = [['a','b'], ['d', 'd']];
 * const url2: Array<url> = [['a','b'], ['c', 'd']];
 */
interface Props extends ViewProps {
  externalUrls: UrlText[]; // array of URLs + page names to pass to child components
  accessibilityLabel: string; // text to be screenread when View is selected
  menuTitle?: string; // optional title to display over menu
  withUrlHint?: true; // optional boolean if accessibility hints are desired for children
  itemFlex?: number;
  itemBackgroundColor?: string;
  itemBorderRadius?: number;
  itemBorderColor?: string;
  itemPadding?: number;
  itemMargin?: number;
  itemBorderWidth?: number;
}

function NavigationMenu(props: Props) {
  const {
    externalUrls,
    withUrlHint,
    menuTitle,
    accessibilityLabel,
    itemFlex,
    itemBackgroundColor,
    itemBorderRadius,
    itemBorderColor,
    itemPadding,
    itemMargin,
    itemBorderWidth,
  } = props;
  const urls = [];
  for (let i = 0; i < externalUrls.length; i += 1) {
    urls.push(
      <Url
        key={`url ${i}`}
        url={externalUrls[i]}
        withUrlHint={withUrlHint}
        itemFlex={itemFlex}
        itemBackgroundColor={itemBackgroundColor}
        itemBorderRadius={itemBorderRadius}
        itemBorderColor={itemBorderColor}
        itemPadding={itemPadding}
        itemMargin={itemMargin}
        itemBorderWidth={itemBorderWidth}
      />
    );
  }
  // ? Consider using ScrollView
  if (menuTitle) {
    return (
      <View
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="menu"
        style={styles.container}
      >
        <Text accessibilityRole="header" style={styles.text}>
          {menuTitle}
        </Text>
        <ScrollView style={styles.scrollView}>{urls}</ScrollView>
      </View>
    );
  }
  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="menu"
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>{urls}</ScrollView>
    </View>
  );
}

const backgroundColor = 'pink';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: backgroundColor,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 28,
  },
});

export default NavigationMenu;
