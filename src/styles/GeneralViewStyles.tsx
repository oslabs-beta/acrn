import React from 'react';
import { View } from 'react-native';

interface CustomStyle {
  flex?: number;
  backgroundColor?: string;
}

export const Styling: React.FC<CustomStyle> = ({ children, ...props }) => {
  const { flex, backgroundColor } = props;

  //TODO Fix tsc errors and remove from tsconfig.build.ignore

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
