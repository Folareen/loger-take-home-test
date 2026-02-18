import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    children: ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 25,
    }
})