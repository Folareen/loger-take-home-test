import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

const AuthDescription = ({ description }: { description: ReactNode }) => {
    return (
        <Text style={styles.description}>{description}</Text>
    )
}

export default AuthDescription

const styles = StyleSheet.create({
    description: {
        fontSize: 14,
        color: '#A0AEC0',
        fontFamily: 'Inter18Regular',
        textAlign: 'center',
        marginTop: 16,
        lineHeight: 19.6,
        maxWidth: 250,
        marginHorizontal: 'auto'
    }
})