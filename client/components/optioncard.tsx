import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  text: string;
  image: any; 
  onPress: () => void;
  overlay?: boolean;
}

const Component: React.FC<Props> = ({ text, image, onPress, overlay = false }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.imageContainer, overlay && styles.imageContainerOverlay]}>
        <Image source={image} style={[styles.image, overlay && styles.imageOverlay]} resizeMode="stretch" />
        {overlay ? (
          <View style={styles.textOverlayContainer}>
            <Text style={styles.text}>{text}</Text>
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C212C',
    padding: 5,
    elevation: 5,
    width: '47%',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    position: 'relative',
  },
  imageContainerOverlay: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    flex: 1,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: -5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#1C212C', // Optional: To make the text more readable
  },
  textOverlayContainer: {
    width: '100%',
    padding: 5,
    backgroundColor: '#1C212C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color to make it stand out
    textAlign: 'center',
  },
});

export default Component;
