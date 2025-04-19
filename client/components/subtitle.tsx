import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
    text: string;
}

const Component: React.FC<Props> = ({ text }) => {
    return (
        <Text style={styles.subTitle}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#FFFFFF',
    },
});

export default Component;
