import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
    children?: React.ReactNode;
    spacedEvenly?: boolean;
    marginVertical?: number | string;
    horizontal?: boolean;
    width?: number | string;
}

const Component: React.FC<Props> = ({ children = null, spacedEvenly = false, marginVertical = 0, horizontal = false, width = '100%' }) => {
    const containerStyle: ViewStyle = {
        justifyContent: spacedEvenly ? 'space-between' : 'center',
        marginVertical: marginVertical as ViewStyle['marginVertical'],
        flexDirection: horizontal ? 'row' : 'column',
        width: width as ViewStyle['width'],
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

export default Component;
