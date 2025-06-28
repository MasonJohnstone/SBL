import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type RowProps = {
  children: React.ReactNode[];
  gap?: number;
  style?: ViewStyle;
};

export default function Row({ children, gap = 16, style }: RowProps) {
  const spacedChildren = React.Children.toArray(children).map((child, index) => (
    <View key={index} style={{ paddingHorizontal: gap / 2, flexShrink: 0 }}>
      {child}
    </View>
  ));

  return (
    <View style={[styles.row, style]}>
      {spacedChildren}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap', // don't allow wrapping
  },
});
