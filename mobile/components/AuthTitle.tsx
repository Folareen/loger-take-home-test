import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AuthTitle = ({ title }: { title: string }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

export default AuthTitle

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2D3748',
        fontFamily: 'Inter18Bold',
        textAlign: 'center',
    }
})