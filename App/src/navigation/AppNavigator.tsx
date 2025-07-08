import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tournaments from '../screens/Tournaments';
import Tournament from '../screens/Tournament';
import Store from '../screens/Store';

export type MainStackParamList = {
  Tournaments: undefined;
  Tournament: { id: string }; // or whatever param you use
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Tournaments" component={Tournaments} />
      <MainStack.Screen name="Tournament" component={Tournament} />
    </MainStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#EEEEEE',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen
        name="Play"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/trophy.png')}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../assets/shirt.png')}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0D0D0D',
    borderTopWidth: 0,
    height: 70,
    elevation: 10,
    paddingTop: 12,
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});