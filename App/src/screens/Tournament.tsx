import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Tournament() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={styles.logoOrange}>Hoop</Text>
          <Text style={styles.logoPurple}>Royale</Text>
        </Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Replace with <Image source={...} /> if needed */}
          <View style={styles.menuIconPlaceholder} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Solos - Hibiscus</Text>

      {/* Info Row */}
      <View style={styles.infoRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.xButton}>
          <Text style={styles.xText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Info</Text>
      </View>

      {/* Pagination Dots */}
      <View style={styles.dotsRow}>
        {Array.from({ length: 5 }).map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === 0 && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoOrange: {
    color: '#FFC000',
  },
  logoPurple: {
    color: '#9193D3',
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconPlaceholder: {
    width: 24,
    height: 18,
    backgroundColor: '#CCC',
    borderRadius: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F0F0F0',
    textAlign: 'center',
    marginTop: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 24,
  },
  xButton: {
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C0C0C0',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  activeDot: {
    backgroundColor: '#CCC',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 20,
  },
  navButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#777',
    borderRadius: 4,
  },
});
