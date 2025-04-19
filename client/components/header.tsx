// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props 
{
    title: string;
}

const Component: React.FC<Props> = ({ title }) =>
{
    return (
        <View style={styles.topContainer}>
        <View style={styles.topBlackBar} />
        <View style={styles.titleBar}>
            <Text style={styles.title}>{title}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
  },
  titleBar: {
    height: 60,
    width: '100%',
    backgroundColor: '#010101',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOpacity: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: 12,
  },
  topBlackBar: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
});

export default Component;
