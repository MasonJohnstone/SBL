import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './src/navigation/AuthNavigator.tsx';
import AppNavigator from './src/navigation/AppNavigator.tsx';
import NameSelectionScreen from './src/screens/NameSelectionScreen.tsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [hasName, setHasName] = useState<boolean>(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem('token');
      const username = await AsyncStorage.getItem('username');

      setUserToken(token);
      setHasName(!!username);
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return null; // TODO: Add a loading spinner if you want
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {!userToken ? (
          <AuthNavigator />
        ) : !hasName ? (
          <NameSelectionScreen />
        ) : (
          <AppNavigator />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
