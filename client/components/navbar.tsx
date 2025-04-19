import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface Props 
{

}

const Component: React.FC<Props> = ({}) =>
{
    return (
        <View style={styles.navigationBar}>
            <TouchableOpacity onPress={() => console.log('store')}>
            <Image
                source={require('@/images/grey store button.png')}
                style={styles.navButtonIcon}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('main')}>
            <Image
                source={require('@/images/white main button.png')}
                style={styles.navButtonIcon}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('social')}>
            <Image
                source={require('@/images/grey social button.png')}
                style={styles.navButtonIcon}
            />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    navigationBar: {
        bottom: 0,
        width: '100%',
        backgroundColor: '#010101',
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    navButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000',
    },
    navButtonIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    imageButton: {
        marginVertical: 10,
    },
    imageButtonIcon: {
        width: '100%',
        height: '100%', // Adjust size as needed
    },
});

export default Component;