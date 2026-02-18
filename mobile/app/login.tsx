import AuthDescription from '@/components/AuthDescription'
import AuthTitle from '@/components/AuthTitle'
import Button from '@/components/Button'
import Container from '@/components/Container'
import OauthBtns from '@/components/OauthBtns'
import TextInput from '@/components/TextInput'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Container>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
                <Image source={require('../assets/images/auth-logo.png')} style={styles.logo} />
                <AuthTitle title='Hi There! 👋' />
                <AuthDescription
                    description='Welcome back, Sign in to your account'
                />
                <View style={styles.formInputs}>
                    <TextInput type='email' value={email} onChange={setEmail} placeholder='Email' />
                    <TextInput type='password' value={password} onChange={setPassword} placeholder='Password' />
                </View>
                <Button title='Login' type='filled' size='full' onPress={() => {
                    router.push('/success')
                }} />
                <OauthBtns />
                <Text style={{ textAlign: 'center', marginTop: 24, color: '#2D3748', fontFamily: 'Inter18Medium' }}>Don't have an account? <Text style={{ color: '#33D49D', fontFamily: 'Inter18Bold' }} onPress={() => router.push('/signup')}>Sign Up</Text></Text>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        maxHeight: '18%',
        width: Dimensions.get('window').width - 50,
        resizeMode: 'contain',
        marginHorizontal: 'auto',
        marginBottom: 10,
    },
    formInputs: {
        marginVertical: 24
    }
})