import React, { useState } from 'react';
import { View, ViewProps } from 'react-native';
import ExternalUrl from '../components/ExternalUrl';
// TODO: Create InternalLink Component

export type url = [a: string, b: string]; // [0] -> page name, [1] -> url

/*
 * example for url type
 * const urls: url[] = [['a','b'], ['d', 'd']];
 * const url2: Array<url> = [['a','b'], ['c', 'd']];
 */
interface Props extends ViewProps {
  externalUrls: url[];
}

// TODO: Add unique keys to render

function NavigationContainer(props: Props) {
  // * Maybe use hooks
  const externalUrls: JSX.Element[] = [];
  for (let i = 0; i < props.externalUrls.length; i++) {
    externalUrls.push(
      <ExternalUrl
        key={`url ${i}`}
        url={props.externalUrls[i]}
        accessibilityRole="menuitem"
      />
    );
  }
  return (
    // ? Consider using ScrollView
    <View accessibilityRole="menu">{externalUrls}</View>
  );
}

export default NavigationContainer;
