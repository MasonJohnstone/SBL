import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import NameSelectionScreen from './src/screens/NameSelect';
import { AuthProvider, useAuth } from './src/context/AuthContext';

function RootNavigator() {
  const { userToken, username, isLoading } = useAuth();

  if (isLoading) {
    return null; // TODO: Add loading spinner later
  }

  return (
    <NavigationContainer>
      {!userToken ? (
        <AuthNavigator />
      ) : !username ? (
        <NameSelectionScreen />
      ) : (
        <AppNavigator />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
