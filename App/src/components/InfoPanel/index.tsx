import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type InfoPanelProps = {
  title: string;
  body: string;
};

export default function InfoPanel({ title, body }: InfoPanelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1118',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 20
  },
  body: {
    color: '#CCCCCC',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15
  },
});
