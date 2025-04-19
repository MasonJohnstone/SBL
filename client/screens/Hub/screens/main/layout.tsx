// layout.tsx
import React from 'react';
import {  } from 'react-native';

import Background from '@/components/background';
import Header from '@/components/header';
import Content from '@/components/content';
import Container from '@/components/container';
import SeasonHeader from '@/components/seasonheader';
import PlayerCard from '@/components/playerbanner';
import Schedule from '@/components/schedule';
import TextButton from '@/components/textbutton';
import Navbar from '@/components/navbar';
import Buttons from '@/screens/Hub/screens/main/buttons'

interface Props {
  setLayout: ( layout: string ) => void;
  playerData: {
    username: string;
    elo: string;
  };
  logout: () => void;
  token: string | null;
}

const Layout: React.FC<Props> = ({ playerData, logout, setLayout, token }) => {

  const createGame = async () => {
    try {
      const response = await fetch(
        'https://jb3pnx6hksuxldiqub5kyyjnqa0koaqx.lambda-url.ap-southeast-2.on.aws/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            auth_token: token,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setLayout('lobby');
        console.log(data.code);
      } else {
        const errorMessage = typeof data === 'string' ? data : data.message || "An unexpected error occurred";
        console.error(response.status, errorMessage);
        alert("Failed to create game: " + errorMessage);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the game.");
    }
  };

  return (
    <>
      <Header title="IRL2K"/>

      <Background>

        <Content spacedEvenly={true}>

          <SeasonHeader user_location='Brisbane'/>

          <PlayerCard
            name={playerData.username}
            division="DX"
            dp={playerData.elo}
            status="status"
          />

          <Schedule/>

          <Buttons createGame={createGame}/>

        </Content>

      </Background>

      <Navbar/>
    </>
  );
};

export default Layout;