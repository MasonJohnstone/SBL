import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  userToken: string | null;
  username: string | null;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
  chooseName: (name: string) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const token = await AsyncStorage.getItem('token');
      const name = await AsyncStorage.getItem('username');
      setUserToken(token);
      setUsername(name);
      setIsLoading(false);
    };
    loadStorageData();
  }, []);

  const signIn = async (token: string) => {
    await AsyncStorage.setItem('token', token);
    setUserToken(token);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('username');
    setUserToken(null);
    setUsername(null);
  };

  const chooseName = async (name: string) => {
    await AsyncStorage.setItem('username', name);
    setUsername(name);
  };

  return (
    <AuthContext.Provider value={{ userToken, username, signIn, signOut, chooseName, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
