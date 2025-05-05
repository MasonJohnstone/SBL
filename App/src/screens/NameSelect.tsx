import React, { useState } from 'react';
import { View, Alert, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';
import InfoPanel from '../components/InfoPanel';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import CameraDotMask from '../components/CameraDotMask';

const BACKGROUND_IMAGE = require('../assets/EarthBackground.png');

export default function NameSelectionScreen() {
  const { chooseName } = useAuth();
  const [name, setName] = useState('');

  const handleConfirm = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const email = await AsyncStorage.getItem('email');

      if (!token || !email) {
        Alert.alert('Error', 'Missing token or email');
        return;
      }

      const getRes = await fetch(
        `https://ky52okhiff7hzr6gmzigp63bwa0rmssj.lambda-url.ap-southeast-2.on.aws/?email=${encodeURIComponent(email)}`
      );

      if (getRes.status !== 200) {
        const err = await getRes.text();
        Alert.alert('Failed to get digits', err);
        return;
      }

      const playerData = await getRes.json();
      const digits = playerData.digits || '00';
      const abbreviation = name.length > 0 ? name[0].toUpperCase() + digits : digits;

      const updateRes = await fetch(
        'https://4a4s4vclxkjmq7bxoierwgldi40oguyd.lambda-url.ap-southeast-2.on.aws/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify({ username: name, abbreviation }),
        }
      );

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
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background} resizeMode="cover">
      <CameraDotMask />
      <View style={styles.container}>
        <InfoPanel
          title="Account created!"
          body="What would you like to be known as? It can be your real name or a creative username."
        />

        <TextInputField value={[name, setName]} placeholder="NAME" />

        <Button text="CONFIRM" onPress={handleConfirm} height={36} width="80%"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0)', // optional dimming overlay
  },
});
