import React, { ComponentType } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, Button, Text, ViewProps, ButtonProps } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

interface ButtProps extends ButtonProps {
  screen: string;
}

function Screen(props: ButtProps) {
  const navigation = useNavigation();
  const { title, screen } = props;
  return (
    <Button
      title={title}
      onPress={() => navigation.navigate({ key: screen })}
    />
  );
}

export default Screen;
