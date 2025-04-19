import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Container from '@/components/container';

interface Props {
    name: string;
    division: string;
    dp: string;
    status: string;
}

const Component: React.FC<Props> = ({ name, division, dp, status }) => {
    return (
        <View style={styles.playerBanner}>
            <Container horizontal={true}>
                <Image source={require('@/images/profile.png')} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Container spacedEvenly={true} horizontal={true}>
                      <Text style={styles.division}>{division} {dp}dp</Text>
                      <Text style={styles.status}>{status}</Text>
                    </Container>
                </View>
            </Container>
        </View>
    );
};

const styles = StyleSheet.create({
    playerBanner: {
        backgroundColor: '#1C212C',
        width: '90%',
        borderRadius: 100,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    divisionStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    division: {
        fontSize: 16,
        color: '#00CFFF',
        marginRight: 5,
        fontWeight: 'bold',
    },
    points: {
      fontSize: 16,
      color: '#A6A6A6',
      marginRight: 5,
      fontWeight: 'bold',
    },
    status: {
        fontSize: 16,
        color: '#FFCC00',
        marginRight: 15,
        fontWeight: 'bold',
    },
});

export default Component;
