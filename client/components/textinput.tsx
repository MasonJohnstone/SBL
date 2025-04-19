import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  placeholder?: string;
  inputHeight?: number;
}

const Component: React.FC<Props> = ({ placeholder = '', inputHeight = 35, ...props }) => {
  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      style={[styles.input, { height: inputHeight }, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'white',
    fontSize: 20,
    elevation: 5,
  },
});

export default Component;
