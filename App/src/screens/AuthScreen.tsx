import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function AuthScreen() {
  const { signIn } = useAuth();

  const handleLogin = async () => {
    await signIn('your-fake-token');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Auth Screen</Text>
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
}
