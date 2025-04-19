// SeasonHeader.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  user_location: string;
}

const Component: React.FC<Props> = () => {
  return (
    <View style={styles.seasonHeader}>
      <Text style={styles.locationYear}>Brisbane 2024</Text>
      <Text style={styles.seasonCountdown}>Regular season ends: 31st July 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  seasonHeader: 
  {
    alignItems: 'center',
  },
  locationYear: 
  {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  seasonCountdown:
  {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#909090',
  },
});

export default Component;
