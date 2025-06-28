import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type ColumnProps = {
  children: React.ReactNode[];
  gap?: number;
  style?: ViewStyle;
};

export default function Column({ children, gap = 16, style }: ColumnProps) {
  return (
    <View style={[styles.column, { gap }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
