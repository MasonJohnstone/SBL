import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayMainScreen from '../screens/PlayMainScreen.tsx';
import PlayLobbyScreen from '../screens/PlayLobbyScreen.tsx';
import StoreScreen from '../screens/StoreScreen.tsx';
import InfoScreen from '../screens/InfoScreen.tsx';

export type PlayStackParamList = {
  PlayMain: undefined;
  Lobby: undefined;
};

const PlayStack = createNativeStackNavigator<PlayStackParamList>();

function PlayNavigator() {
  return (
    <PlayStack.Navigator screenOptions={{ headerShown: false }}>
      <PlayStack.Screen name="PlayMain" component={PlayMainScreen} />
      <PlayStack.Screen name="Lobby" component={PlayLobbyScreen} />
    </PlayStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Play" component={PlayNavigator} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
}
