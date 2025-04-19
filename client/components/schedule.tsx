import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

import Container from '@/components/container';
import TextButton from '@/components/textbutton';

const Component: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <View style={styles.scheduleNavContainer}>
        <Text style={styles.scheduleNavOption}>Yesterday</Text>
        <Text style={styles.scheduleNavOptionCurrent}>Today</Text>
        <Text style={styles.scheduleNavOption}>Tomorrow</Text>
      </View>
      <Animated.ScrollView
        style={styles.scheduleContentContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}>
        <View style={styles.scheduleContent}>
          <View style={styles.schedulePromptContainer}>
            <Text style={styles.schedulePrompt}>
              No more scheduled events. Schedule an event or simply find other players at a local court.
            </Text>
          </View>
          <TextButton text='Open Schedule' onPress={() => {}} fontSize={17} color='#BFBFBF' width='100%' padding={10} borderRadius={10} fontColor='#404040'/>
        </View>
      </Animated.ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scheduleNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 5,
  },
  scheduleNavOption: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scheduleNavOptionCurrent: {
    fontSize: 17,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
  scheduleContentContainer: {
    height: 130,
    width: '90%',
    marginTop: 5,
  },
  scheduleContent: {
    alignItems: 'center',
  },
  schedulePromptContainer: {
    backgroundColor: '#1C212C',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 3,
    width: '100%',
  },
  schedulePrompt: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#BFBFBF',
  },
});

export default Component;
