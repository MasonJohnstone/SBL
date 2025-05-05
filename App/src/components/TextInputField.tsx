import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

type CustomInputProps = {
  value: [string, React.Dispatch<React.SetStateAction<string>>];
  placeholder?: string;
  secure?: boolean;
};

export default function CustomInput({ value, placeholder = '', secure = false }: CustomInputProps) {
  const [text, setText] = value;

  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder={placeholder}
      placeholderTextColor="#A6A6A6"
      autoCapitalize="none"
      secureTextEntry={secure}
      style={styles.input}
      textAlign="center"
      textAlignVertical="center"
      underlineColorAndroid="transparent"
      {...(Platform.OS === 'android' ? { includeFontPadding: false } : {})}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 36,
    paddingVertical: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center', // helps Android center vertically
    marginBottom: 20,
  },
});
