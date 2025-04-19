import React, { useState } from 'react';
import { View } from 'react-native';
// Screens
import AuthScreen from './screens/Auth/index';
import HubScreen from './screens/Hub/index';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [screen, setScreen] = useState<string>('Hub'); // Default screen after authentication

  const login = (email: string, token: string) => {
    console.log("Logging in with email:", email, "and token:", token);
    setEmail(email);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log("Logging out");
    setEmail(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  const renderScreen = () => {
    console.log("Rendering screen:", screen);
    switch(screen) {
      case 'Hub':
        return <HubScreen logout={logout} email={email} token={token} />;
      // case 'Another':
      //   return <AnotherScreen logout={logout} email={email} token={token} />;
      // Add more cases for other screens
      default:
        return <HubScreen logout={logout} email={email} token={token} />;
    }
  };

  console.log("Is authenticated:", isAuthenticated);

  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated ? renderScreen() : <AuthScreen onLogin={login} />}
    </View>
  );
};

export default App;
