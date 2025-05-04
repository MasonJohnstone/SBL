import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_URL = 'https://bbfkon2flaqxqoj76tvl3izhqm0mtvtk.lambda-url.ap-southeast-2.on.aws/';

export default function AuthScreen() {
  const { signIn, chooseName } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async (mode: 'login' | 'signup') => {
    try {
      const res = await fetch(AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, mode }),
      });
  
      const data = await res.json();
  
      if (res.status === 200) {
        await AsyncStorage.setItem('email', email); // ✅ Save email here
        await signIn(data.token);
  
        // If user already has a username, skip name selection
        if (data.username) {
          await chooseName(data.username);
        }
      } else {
        Alert.alert('Error', data);
      }
    } catch (err) {
      Alert.alert('Network error', String(err));
    }
  };  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Welcome to SBL!</Text>

      <View style={{ backgroundColor: '#1118', padding: 16, borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', marginBottom: 8 }}>
          Welcome to SBL!
        </Text>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Compete for free anywhere to gain division points and climb the ladder. The top players will qualify for playoffs where they can earn up to <Text style={{ color: '#00FFCC', fontWeight: 'bold' }}>$1,000</Text>.
        </Text>
      </View>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{
          width: '80%',
          padding: 10,
          marginBottom: 10,
          backgroundColor: '#eee',
          borderRadius: 5,
        }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          width: '80%',
          padding: 10,
          marginBottom: 20,
          backgroundColor: '#eee',
          borderRadius: 5,
        }}
      />

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity
          onPress={() => handleAuth('login')}
          style={{ backgroundColor: '#00FFC2', padding: 12, borderRadius: 5, marginRight: 10 }}
        >
          <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleAuth('signup')}
          style={{ backgroundColor: '#00FFC2', padding: 12, borderRadius: 5 }}
        >
          <Text style={{ fontWeight: 'bold' }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
