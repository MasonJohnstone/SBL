import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
  fontColor?: string;
  backgroundColor?: string;
  height?: number;
  style?: ViewStyle;
};

export default function Button({
  text,
  onPress,
  fontColor = '#000',
  backgroundColor = '#00FFC2',
  height = 40,
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor, height },
        style,
      ]}
    >
      <Text style={[styles.text, { color: fontColor }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1, // ✅ fills available horizontal space
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20, // ✅ optional spacing between buttons
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
