import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';

export default function NameSelectionScreen() {
  const { chooseName } = useAuth();
  const [name, setName] = useState('');

  const handleConfirm = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const email = await AsyncStorage.getItem('email'); // store this during login/signup

      if (!token || !email) {
        Alert.alert('Error', 'Missing token or email');
        return;
      }

      // 🔍 Fetch digits using new public getPlayer function
      const getRes = await fetch(`https://ky52okhiff7hzr6gmzigp63bwa0rmssj.lambda-url.ap-southeast-2.on.aws/?email=${encodeURIComponent(email)}`);
      if (getRes.status !== 200) {
        const err = await getRes.text();
        Alert.alert('Failed to get digits', err);
        return;
      }

      const playerData = await getRes.json();
      const digits = playerData.digits || '00';

      // ✏️ Construct abbreviation: capital first letter + digits
      const abbreviation = name.length > 0 ? name[0].toUpperCase() + digits : digits;

      // ✅ Submit update with username and abbreviation
      const updateRes = await fetch('https://4a4s4vclxkjmq7bxoierwgldi40oguyd.lambda-url.ap-southeast-2.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ username: name, abbreviation }),
      });

      if (updateRes.status === 200) {
        await chooseName(name);
      } else {
        const error = await updateRes.text();
        Alert.alert('Update failed', error);
      }
    } catch (err) {
      Alert.alert('Network error', String(err));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <View style={{ backgroundColor: '#1118', padding: 16, borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', marginBottom: 8 }}>
          Account created!
        </Text>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          What would you like to be known as? It can be your real name or a creative username.
        </Text>
      </View>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
        style={{
          width: '80%',
          padding: 10,
          marginBottom: 20,
          backgroundColor: '#eee',
          borderRadius: 5,
        }}
      />

      <TouchableOpacity
        onPress={handleConfirm}
        style={{ backgroundColor: '#00FFC2', padding: 12, borderRadius: 5 }}
      >
        <Text style={{ fontWeight: 'bold' }}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
}
