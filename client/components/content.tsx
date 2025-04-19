import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
    children: React.ReactNode;
    spacedEvenly?: boolean;
    marginVertical?: number | string;
}

const Component: React.FC<Props> = ({ children, spacedEvenly = false, marginVertical = 0 }) => {
    const containerStyle: ViewStyle = {
        justifyContent: spacedEvenly ? 'space-evenly' : 'center',
        marginVertical: marginVertical as ViewStyle['marginVertical'],
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
});

export default Component;
