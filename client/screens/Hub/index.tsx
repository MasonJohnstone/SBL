import React, { useState, useRef, useEffect } from 'react';
import { Animated, Alert } from 'react-native';
import MainLayout from './screens/main/layout';
import LobbyLayout from './screens/lobby/layout';

interface MainScreenProps {
  logout: () => void;
  email: string | null;
  token: string | null;
}

const MainScreen: React.FC<MainScreenProps> = ({ logout, email, token }) => {
  const [playerData, setPlayerData] = useState({
    username: '',
    team_name: '',
    elo: '',
  });

  const [layout, setLayout] = useState<string>('main');

  useEffect(() => {
    if (email && token) {
      fetch('https://rnqklhx6lxsl5lpw6k7om2dume0bonir.lambda-url.ap-southeast-2.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email })
      })
      .then(response => response.json().then(data => ({ status: response.status, body: data })))
      .then(({ status, body }) => {
        if (status === 200) {
          setPlayerData(body);
          console.log(body);
        } else {
          Alert.alert('Error', body);
        }
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
        Alert.alert('Error', 'Failed to fetch player data');
      });
    }
  }, [email, token]);

  const renderLayout = () => {
    switch (layout) {
      case 'lobby':
        return (
          <LobbyLayout
            playerData={playerData}
            logout={logout}
          />
        );
      default:
        return (
          <MainLayout
          setLayout={ setLayout }
            playerData={playerData}
            logout={logout}
            token={token}
          />
        );
    }
  };
  

  return (
    <>
      {renderLayout()}
    </>
  );
};

export default MainScreen;
