import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import Lobby from '../screens/Lobby';
import Store from '../screens/Store';
import Info from '../screens/Info';

export type MainStackParamList = {
  Main: undefined;
  Lobby: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Main" component={Main} />
      <MainStack.Screen name="Lobby" component={Lobby} />
    </MainStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Play" component={MainNavigator} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
}
