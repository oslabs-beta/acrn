import React from 'react';
import { View } from 'react-native';

interface CustomStyle {
  flex?: number;
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number;
}

const DefaultViewStyle: React.FC<CustomStyle> = ({ children, ...props }) => {
  const { flex, backgroundColor, borderRadius, padding } = props;

  return (
    <View
      style={{
        flex: flex,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        padding: padding,
      }}
    >
      {children}
    </View>
  );
};

export default DefaultViewStyle;
