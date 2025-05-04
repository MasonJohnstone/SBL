import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function PlayMainScreen() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Play Main Screen</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Logout" color="#FF4444" onPress={signOut} />
      </View>
    </View>
  );
}
