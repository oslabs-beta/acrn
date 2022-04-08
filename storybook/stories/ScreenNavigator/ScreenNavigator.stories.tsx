import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationMenu from "../../../src/containers/NavigationContainer";

storiesOf("ExampleApp", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Core Text input", () => <NavigationMenu />);
