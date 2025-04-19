import React, { useState } from 'react';
import { Alert } from 'react-native';
import Layout from '@/screens/Auth/layout';

interface AuthScreenProps {
  onLogin: (email: string, token: string) => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  // signup state
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');

  // login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const handleSignup = async () => {
    try {
      const response = await fetch(
        'https://rgaidxicoijbtiw6dtwalsxlxe0jrxhh.lambda-url.ap-southeast-2.on.aws/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            nickname: nickname,
            email: signupEmail,
            password: signupPassword,
          }),
        }
      );
  
      const data = await response.json();
  
      if (response.status === 200) {
        onLogin(signupEmail, data.token); // Pass email and token to onLogin
      } else {
        const errorMessage = typeof data === 'string' ? data : data.message || "An unexpected error occurred";
        console.error(response.status, errorMessage);
        Alert.alert("Sign Up Failed", errorMessage);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("An error occurred", "Unable to sign up.");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://yi6w7q75c45rmwkcjivb2lz4bu0avwgw.lambda-url.ap-southeast-2.on.aws/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        onLogin(loginEmail, data.token); // Pass email and token to onLogin
      } else {
        const errorMessage = typeof data === 'string' ? data : data.message || "An unexpected error occurred";
        console.error(response.status, errorMessage);
        Alert.alert("Login Failed", errorMessage);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("An error occurred", "Unable to login.");
    }
  };

  return (
    <Layout
      username={username}
      setUsername={setUsername}
      nickname={nickname}
      setNickname={setNickname}
      signupEmail={signupEmail}
      setSignupEmail={setSignupEmail}
      signupPassword={signupPassword}
      setSignupPassword={setSignupPassword}
      loginEmail={loginEmail}
      setLoginEmail={setLoginEmail}
      loginPassword={loginPassword}
      setLoginPassword={setLoginPassword}
      handleSignup={handleSignup}
      handleLogin={handleLogin}
    />
  );
};

export default AuthScreen;
