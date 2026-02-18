import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';

type Props = {
    type: 'text' | 'email' | 'password'
    value: string
    placeholder: string
    onChange: (value: string) => void
}

const PasswordInput = ({ value, onChange, placeholder }: { value: string, onChange: (value: string) => void, placeholder: string }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    return (
        <View style={[styles.passwordInput, isFocused ? styles.focused : null]}>
            <TextInput secureTextEntry={!showPassword} value={value} onChangeText={onChange} placeholder={placeholder} style={styles.passwordInputText} placeholderTextColor={'#A0AEC0'} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
            <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>{!showPassword ? <Feather name="eye-off" size={24} color="#CBD5E0" /> : <Feather name="eye" size={24} color="#CBD5E0" />}</TouchableOpacity>
        </View>
    )
}

const NormalInput = ({ value, onChange, placeholder }: { value: string, onChange: (value: string) => void, placeholder: string }) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <TextInput value={value} onChangeText={onChange} placeholder={placeholder} placeholderTextColor={'#A0AEC0'} style={[styles.input, isFocused ? styles.focused : null]} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    )
}

export default ({ type, value, onChange, placeholder }: Props) => {

    return (
        <>
            {type === 'password' ? <PasswordInput value={value} onChange={onChange} placeholder={placeholder} /> : <NormalInput value={value} onChange={onChange} placeholder={placeholder} />}
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        color: '#2D3748',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 16,
        fontSize: 14,
        fontFamily: 'Inter18Regular',
        borderColor: '#E2E8F0',
        borderWidth: 1,
        marginTop: 12,
        lineHeight: 19.6,
    },
    passwordInput: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16,
        borderColor: '#E2E8F0',
        borderWidth: 1,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInputText: {
        color: '#2D3748',
        fontSize: 14,
        fontFamily: 'Inter18Regular',
        flex: 1,
        lineHeight: 19.6,
        paddingVertical: 0,
    },
    focused: {
        borderColor: '#33D49D',
    }
})