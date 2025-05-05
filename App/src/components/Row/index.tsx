import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type RowProps = {
  children: React.ReactNode[];
  gap?: number;
  style?: ViewStyle;
};

export default function Row({ children, gap = 16, style }: RowProps) {
  return (
    <View style={[styles.row, { gap }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '80%',
  },
});
