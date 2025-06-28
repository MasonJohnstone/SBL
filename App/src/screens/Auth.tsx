import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';
import TextInputField from '../components/TextInputField';
import Row from '../components/Row';
import Column from '../components/Column';
import CameraDotMask from '../components/CameraDotMask';

const AUTH_URL = 'https://bbfkon2flaqxqoj76tvl3izhqm0mtvtk.lambda-url.ap-southeast-2.on.aws/';
const LoginIcon = require('../assets/login.png');
const SignupIcon = require('../assets/signup.png');

export default function Auth() {
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
        await AsyncStorage.setItem('email', email);
        await signIn(data.token);

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
    <View style={[styles.background]}>

        <CameraDotMask />

        <View style={styles.container}>

        <Column gap={0} style={{ marginBottom: 24 }}>
            <Text style={styles.welcome}>Welcome to</Text>
            <Row gap={4}>
              <Text style={styles.hoop}>Hoop</Text>
              <Text style={styles.royale}>Royale!</Text>
            </Row>
          </Column>


          <TextInputField value={[email, setEmail]} placeholder="Email" />
          <TextInputField value={[password, setPassword]} placeholder="Password" secure />


          <Row gap={90}>
            <TouchableOpacity onPress={() => handleAuth('login')}>
              <Column gap={8}>
                <Image source={LoginIcon} style={styles.icon} />
                <Text style={styles.label}>Login</Text>
              </Column>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleAuth('signup')}>
              <Column gap={8}>
                <Image source={SignupIcon} style={styles.icon} />
                <Text style={styles.label}>Sign up</Text>
              </Column>
            </TouchableOpacity>
          </Row>


        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0D0D0D',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    icon: {
      width: 44,
      height: 36,
      marginBottom: 0,
    },
    label: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500',
      padding: 0,
    },

    welcome: {
      fontSize: 24,
      color: '#D9D9D9',
      fontWeight: '500',
    },
    hoop: {
      fontSize: 24,
      color: '#FFC000',
      fontWeight: '600',
    },
    royale: {
      fontSize: 24,
      color: '#9193D3',
      fontWeight: '600',
    },
  });
  
