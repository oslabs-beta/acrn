import React from "react";
import { View } from "react-native";

interface CustomStyle {
  flex?: number;
  backgroundColor?: string;
}

export const Styling: React.FC<CustomStyle> = ({ children, ...props }) => {
  const { flex, backgroundColor } = props;
  return (
    <View
      style={{
        flex: flex,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </View>
  );
};
