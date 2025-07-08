import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type RowProps = {
  children: React.ReactNode[];
  width?: number | `${number}%`; // accepts 100, or '80%', '100%' etc
  style?: ViewStyle;
};

export default function Row({ children, width = '100%', style }: RowProps) {
  return (
    <View style={[styles.row, { width }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
});
