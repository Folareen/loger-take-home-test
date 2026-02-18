import AuthDescription from '@/components/AuthDescription'
import Button from '@/components/Button'
import Container from '@/components/Container'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const Success = () => {
    return (
        <Container>
            <Image source={require('../assets/images/success-state-illustration.png')} style={styles.illustration} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Hello Tocky! 👋
                </Text>
                <Text style={styles.title}>
                    Welcome to Stockline
                </Text>
                <AuthDescription description='It’s great to have you here' />
            </View>
            <Button title="I'm ready to start!" onPress={() => { }} type='filled' size='full' />
        </Container>
    )
}

export default Success

const styles = StyleSheet.create({
    illustration: {
        maxHeight: '40%',
        width: Dimensions.get('window').width - 50,
        resizeMode: 'contain',
        marginHorizontal: 'auto',
        marginBottom: 10,
    },
    content: {
        marginBottom: 'auto'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Inter18SemiBold',
        color: '#2D3748',
        textAlign: 'center',
        marginBottom: 8,
    },
})