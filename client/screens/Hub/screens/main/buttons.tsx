import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import Container from '@/components/container';
import TextButton from '@/components/textbutton';

interface Props {
  createGame: () => void;
}

const Component: React.FC<Props> = ({ createGame }) => 
{

  const [state, setState] = useState<'normal' | 'play'>('normal');

  const play = () => 
  {
    setState('play')
  }

  const normal = () =>
  {
    setState('normal')
  }

  return (
    <Container width='90%'>
      {state === 'normal' ? (
        <>
          <TextButton text='PLAY' onPress={play} width='100%' fontSize={30} padding={10} borderRadius={10} color={'#00FFCC'} fontColor='#006666'/>
          <Container horizontal={true} spacedEvenly={true}>
            <TextButton text='???' onPress={() => {}} width='48.5%' fontSize={20} padding={10} borderRadius={10} color={'#00CCFF'} fontColor='#1F4E79'/>
            <TextButton text='???' onPress={() => {}} width='48.5%' fontSize={20} padding={10} borderRadius={10} color={'#CC99FF'} fontColor='#7030A0'/>
          </Container>
        </>
      ) : (
        <>
          <Container horizontal={true} spacedEvenly={true}>
            <TextButton text='MAKE' onPress={createGame} width='48.5%' fontSize={30} padding={10} borderRadius={10} color={'#00FFCC'} fontColor='#006666'/>
            <TextButton text='JOIN' onPress={() => {}} width='48.5%' fontSize={30} padding={10} borderRadius={10} color={'#00CCFF'} fontColor='#1F4E79'/>
          </Container>
          <TextButton text='     Cancel     ' onPress={normal} fontSize={20} padding={10} borderRadius={10} color={'#CC99FF'} fontColor='#7030A0'/>
        </>
      )}
    </Container>
  );
};

export default Component;
