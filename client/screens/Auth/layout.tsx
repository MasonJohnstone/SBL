import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import Background from '@/components/background';
import Header from '@/components/header';
import Content from '@/components/content';
import Container from '@/components/container';
import Subtitle from '@/components/subtitle';
import TextButton from '@/components/textbutton';
import TextInput from '@/components/textinput';


interface AuthScreenLayoutProps {
  username: string;
  setUsername: (text: string) => void;
  nickname: string;
  setNickname: (text: string) => void;
  signupEmail: string;
  setSignupEmail: (text: string) => void;
  signupPassword: string;
  setSignupPassword: (text: string) => void;
  loginEmail: string;
  setLoginEmail: (text: string) => void;
  loginPassword: string;
  setLoginPassword: (text: string) => void;
  handleSignup: () => void;
  handleLogin: () => void;
}

const AuthScreenLayout: React.FC<AuthScreenLayoutProps> = ({
  username,
  setUsername,
  nickname,
  setNickname,
  signupEmail,
  setSignupEmail,
  signupPassword,
  setSignupPassword,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  handleSignup,
  handleLogin,
}) => {
  return (
    <>
      <Header title="Login/Sign Up"/>
      <Background>
        <Content spacedEvenly={true} marginVertical='10%'>
          <Container>
            <Subtitle text='Sign up'/>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername}/>
            <TextInput placeholder="Nickname" value={nickname} onChangeText={setNickname}/>
            <TextInput placeholder="Email" value={signupEmail} onChangeText={setSignupEmail} autoCapitalize="none"/>
            <TextInput placeholder="Password" value={signupPassword} onChangeText={setSignupPassword} secureTextEntry/>
            <TextButton text='Sign up' onPress={handleSignup} width='80%' height={35} fontSize={20} fontColor='#006666'/>
          </Container>
          <Container>
            <Subtitle text='Login'/>
            <TextInput placeholder="Email" value={loginEmail} onChangeText={setLoginEmail} autoCapitalize="none"/>
            <TextInput placeholder="Password" value={loginPassword} onChangeText={setLoginPassword} secureTextEntry/>
            <TextButton text='Login' onPress={handleLogin} width='80%' height={35} fontSize={20} fontColor='#006666'/>
          </Container>
        </Content>
      </Background>
    </>
  );
};

export default AuthScreenLayout;
