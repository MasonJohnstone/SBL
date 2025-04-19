import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const Component: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.background}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    backgroundColor: '#010101', // Change this to any color you prefer
  },
});

export default Component;
