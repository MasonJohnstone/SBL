import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
  fontColor?: string;
  backgroundColor?: string;
  height?: number;
  width?: ViewStyle['width'];
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  text,
  onPress,
  fontColor = '#000',
  backgroundColor = '#00FFC2',
  height = 40,
  width,
  style,
  textStyle,
}: ButtonProps) {
  const dynamicStyles: ViewStyle = {
    backgroundColor,
    height,
    ...(width !== undefined ? { width } : { flex: 1 }), // ⬅️ key change
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, dynamicStyles, style]}>
      <Text style={[styles.text, { color: fontColor }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
