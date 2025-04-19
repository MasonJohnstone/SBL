// layout.tsx
import React from 'react';
import {  } from 'react-native';

import Background from '@/components/background';
import Header from '@/components/header';
import Content from '@/components/content';
import Container from '@/components/container';
import PlayerCard from '@/components/playerbanner';

import TextButton from '@/components/textbutton';
import Navbar from '@/components/navbar';

interface Props
{
    playerData:
    {
        username: string;
        elo: string;
    };
    logout: () => void;
}

const Layout: React.FC<Props> = ({ playerData, logout }) =>
{
  return (
    <>
      <Header title="Lobby"/>
      <Background>

        <Content spacedEvenly={true}>
          <Container>

            <PlayerCard
              name={playerData.username}
              division="DX"
              dp={playerData.elo}
              status="status"
            />

            <PlayerCard
              name="Lebron James" 
              division="D1" 
              dp='10' 
              status="waiting" 
            />

          </Container>

          <Container>

            <TextButton text='READY' onPress={() => {}} width='90%' fontSize={30} padding={10} borderRadius={10} color={'#00FFCC'} fontColor='#006633'/>

            <Container width={'90%'} horizontal={true} spacedEvenly={true}>
                
              <TextButton text='HUB' onPress={() => {}} width='48.5%' fontSize={20} padding={8} borderRadius={10} color={'#00CCFF'} fontColor='#003366'/>
              <TextButton text='LEAVE' onPress={() => {}} width='48.5%' fontSize={20} padding={8} borderRadius={10} color={'#CC99FF'} fontColor='#330066'/>

            </Container>

          </Container>

        </Content>

      </Background>

      <Navbar/>
    </>
  );
};

export default Layout;