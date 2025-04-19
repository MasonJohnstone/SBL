import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  username: string;
  elo: string;
}

const Component: React.FC<Props> = ({ username: username, elo }) => {
  return (
    <View style={styles.playerCard}>
      <View style={styles.upperPlayerCard}>
        <Text style={styles.playerName}>{username}</Text>
      </View>
      <View style={styles.lowerPlayerCard}>
        <View style={styles.modeRank}>
          <Text style={styles.mode}>1v1</Text>
          {/* <Text style={styles.division}>PD</Text> */}
          <Text style={styles.points}>{elo}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerCard: {
    width: '90%',
  },
  upperPlayerCard: {
    backgroundColor: '#1C212C',
    width: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  playerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  teamName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7F7F7F',
    marginTop: 5,
  },
  lowerPlayerCard: {
    backgroundColor: '#1C212C',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modeRank: {
    alignItems: 'center',
  },
  mode: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  division: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9999FF',
  },
  points: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#AFABAB',
  },
});

export default Component;
