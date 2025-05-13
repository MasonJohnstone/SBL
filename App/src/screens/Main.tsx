import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import InfoPanel from '../components/InfoPanel';
import Button from '../components/Button';
import CameraDotMask from '../components/CameraDotMask';

const BACKGROUND_IMAGE = require('../assets/EarthBackground.png');

export default function Main() {
  const [player, setPlayer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        if (!email) throw new Error('Missing email');

        const res = await fetch(
          `https://ky52okhiff7hzr6gmzigp63bwa0rmssj.lambda-url.ap-southeast-2.on.aws/?email=${encodeURIComponent(email)}`
        );

        const data = await res.json();
        setPlayer(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, []);

  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background} resizeMode="cover">
      <CameraDotMask />

      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#00FFC2" />
        ) : (
          <>
            <View style={styles.card}>
              <Text style={styles.name}>{player?.username || 'Unknown'}</Text>
              <Text style={styles.subtext}>{player?.team_name || 'No Team'}</Text>
              <View style={styles.statsRow}>
                <Text style={styles.stat}>Pickup\nAS\n{player?.elo || 0}dp</Text>
                <Text style={styles.stat}>Solo\nAS\n{player?.elo || 0}dp</Text>
                <Text style={styles.stat}>Team\nAS\n{player?.elo || 0}dp</Text>
              </View>
            </View>

            <InfoPanel
              title="Let's Play!"
              body="Play pickup games or schedule meetups with others in your region."
            />
            
            <Button text="PLAY" onPress={() => navigation.navigate('Lobby')} height={48} width='80%'/>
          </>
        )}
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
  },
  card: {
    backgroundColor: '#1118',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  stat: {
    color: '#ccc',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});
