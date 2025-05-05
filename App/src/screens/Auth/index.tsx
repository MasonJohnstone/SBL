import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import InfoPanel from '../../components/InfoPanel/index';
import TextInputField from '../../components/TextInputField/index';
import Row from '../../components/Row';
import Button from '../../components/Button';

const AUTH_URL = 'https://bbfkon2flaqxqoj76tvl3izhqm0mtvtk.lambda-url.ap-southeast-2.on.aws/';
const BACKGROUND_IMAGE = require('../../assets/EarthBackground.png');

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
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background} resizeMode="cover">

        <View style={styles.container}>

            <InfoPanel
                title="Welcome to SBL!"
                body="Compete for free anywhere to gain division points and climb the ladder. The top players will qualify for playoffs where they can earn up to $1,000."
            />

            <TextInputField value={[email, setEmail]} placeholder="EMAIL" />
            <TextInputField value={[password, setPassword]} placeholder="PASSWORD" secure />


            <Row>
                <Button text="LOGIN" onPress={() => handleAuth('login')} height={36}/>
                <Button text="SIGNUP" onPress={() => handleAuth('signup')} height={36}/>
            </Row>

        </View>
    </ImageBackground>
  );
}
