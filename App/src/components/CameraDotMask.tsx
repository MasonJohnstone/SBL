import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

export default function CameraDotMask() {
  return <View style={styles.mask} />;
}

const styles = StyleSheet.create({
  mask: {
    width: '100%',
    height: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 24,
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    zIndex: 1000,
  },
});
