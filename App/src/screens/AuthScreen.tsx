import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthScreen() {
  const login = async () => {
    await AsyncStorage.setItem('token', 'your-fake-token');
    await AsyncStorage.setItem('username', ''); // Simulate no name set yet
    // In real app, you'd want to refresh navigation stack after login
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Auth Screen</Text>
      <Button title="Log in" onPress={login} />
    </View>
  );
}
