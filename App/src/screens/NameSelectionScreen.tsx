import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NameSelectionScreen() {
  const chooseName = async () => {
    await AsyncStorage.setItem('username', 'Mason');
    // After setting name, you should navigate user to the App tabs
    // In real app, maybe force a reload or use context to refresh
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name Selection Screen</Text>
      <Button title="Choose Name" onPress={chooseName} />
    </View>
  );
}
