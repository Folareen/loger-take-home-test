import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'

type Props = {
    type: 'outlined' | 'filled'
    title: string
    size: 'half' | 'full'
    onPress: () => void
    style?: StyleProp<ViewStyle>
}

const Button = ({ type, title, size, onPress, style }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, type === 'outlined' ? styles.outlined : styles.filled, size === 'half' ? styles.half : styles.full, style]}>
            <Text style={[styles.text, type === 'outlined' ? styles.outlinedText : styles.filledText]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        paddingVertical: 18,
        borderRadius: 16,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    half: {
        width: '48%',
    },
    full: {
        width: '100%',
    },
    outlined: {
        borderWidth: 1,
        borderColor: '#33D49D',
    },
    filled: {
        backgroundColor: '#33D49D',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Inter18Bold',
    },
    outlinedText: {
        color: '#33D49D',
    },
    filledText: {
        color: 'white',
    }
})