import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type DimensionValue = number | string;

interface Props {
    text: string;
    onPress: () => void;
    width?: DimensionValue;
    color?: string;
    height?: DimensionValue;
    fontSize?: number;
    fontColor?: string;
    padding?: DimensionValue;
    borderRadius?: number;
}

const Component: React.FC<Props> = ({
    text,
    onPress,
    width = 'auto',
    color = '#00FFCC',
    height = 'auto',
    fontSize = 30,
    fontColor = '#0D0D0D',
    padding = 5,
    borderRadius = 5,
}) => {
    return (
        <TouchableOpacity 
            style={[
                styles.button, 
                { width, height, backgroundColor: color, padding, borderRadius } as ViewStyle
            ]} 
            onPress={onPress}
        >
            <Text style={[
                styles.buttonText, 
                { fontSize, color: fontColor } as TextStyle
            ]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        elevation: 5,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});

export default Component;
