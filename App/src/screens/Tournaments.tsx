import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import CameraDotMask from '../components/CameraDotMask';

const MenuIcon = require('../assets/menu.png');
const CrownIcon = require('../assets/crown.png');
const CalenderIcon = require('../assets/calendar.png');
const FilterIcon = require('../assets/filter.png');
const ArrowIcon = require('../assets/arrow.png');

export default function Main() {
  return (
    <View style={styles.background}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={styles.logoOrange}>Hoop</Text>
          <Text style={styles.logoPurple}>Royale</Text>
        </Text>
        <TouchableOpacity style={styles.menuButton} onPress={signOut}>
          <Image source={MenuIcon} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Tournaments</Text>

      {/* Top Tabs */}
      <View style={styles.tabsRow}>
        <TouchableOpacity style={styles.tabIcon}>
          <Image source={CrownIcon} style={styles.tabImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <Image source={CalenderIcon} style={styles.tabImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabIcon}>
          <Image source={FilterIcon} style={styles.tabImage} />
        </TouchableOpacity>
      </View>


      {/* Tournaments List */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {[
          {
            title: 'Solos',
            location: '@Hibiscus',
            date: 'Saturday – 23/05/25',
            prize: '$500 PRIZE POOL',
          },
          {
            title: 'Duos',
            location: '@Hibiscus',
            date: 'Saturday – 30/05/25',
            prize: '$1,000 PRIZE POOL',
          },
          {
            title: 'Duos',
            location: '@Hibiscus',
            date: 'Saturday – 14/01/25',
            winner: 'Xishymoda 👑',
          },
          {
            title: 'Solos',
            location: '@Hibiscus',
            date: 'Saturday – 23/05/25',
            prize: '$500 PRIZE POOL',
          },
          {
            title: 'Duos',
            location: '@Hibiscus',
            date: 'Saturday – 30/05/25',
            prize: '$1,000 PRIZE POOL',
          },
          {
            title: 'Duos',
            location: '@Hibiscus',
            date: 'Saturday – 14/01/25',
            winner: 'Xishymoda 👑',
          },
        ].map((t, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View>
              <Text style={styles.tournamentType}>
                <Text style={styles.orange}>{t.title}</Text>{' '}
                <Text style={styles.purple}>{t.location}</Text>
              </Text>
              <Text style={styles.date}>{t.date}</Text>
              {t.prize ? (
                <Text style={styles.prize}>{t.prize}</Text>
              ) : (
                <Text style={styles.winner}>{t.winner}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.arrowPlaceholder}>
              <Image source={ArrowIcon} style={styles.arrowIcon} />
            </TouchableOpacity>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  menuIcon: {

  },
  container: {
    //width: '90%'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#F0F0F0',
    marginVertical: 16,
    marginTop: 30,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 26,
    marginBottom: 20,
  },
  tabIcon: {
    width: 32,
    height: 32,
    // backgroundColor: '#ddd',
    borderRadius: 6,
  },
  tabImage: {
    height: 30,
    aspectRatio: 1, // This assumes the image is square
    resizeMode: 'contain',
  },  
  scroll: {
    paddingHorizontal: 0,
    gap: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#0D0D0D',
    //backgroundColor: '#1C1C1C',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  tournamentType: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  orange: {
    color: '#FFC000',
  },
  purple: {
    color: '#9193D3',
  },
  date: {
    color: '#999',
    marginTop: 2,
    letterSpacing: 1,
  },
  prize: {
    color: '#00FF99',
    fontWeight: 'bold',
    marginTop: 2,
    fontSize: 18,
    letterSpacing: 1,
  },
  winner: {
    marginTop: 2,
    fontWeight: 'bold',
    color: '#DDA0DD',
    fontSize: 18,
    letterSpacing: 1,
  },
  arrowPlaceholder: {
    width: 35,
    height: 35,
    //backgroundColor: '#ccc',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    height: 35,
    aspectRatio: 1, // This assumes the image is square
    resizeMode: 'contain',
  },  
});
