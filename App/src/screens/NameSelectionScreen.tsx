import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function NameSelectionScreen() {
  const { chooseName } = useAuth();

  const handleChooseName = async () => {
    await chooseName('Mason');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name Selection Screen</Text>
      <Button title="Choose Name" onPress={handleChooseName} />
    </View>
  );
}
