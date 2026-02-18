import AuthDescription from '@/components/AuthDescription';
import AuthTitle from '@/components/AuthTitle';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const VerificationCode = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleKeyPress = (key: string) => {
        if (key === 'delete') {
            let lastFilled = code.findLastIndex(d => d !== '');
            if (lastFilled >= 0) {
                const newCode = [...code];
                newCode[lastFilled] = '';
                setCode(newCode);
                setActiveIndex(lastFilled);
            }
        } else if (/^\d$/.test(key)) {
            let idx = code.findIndex(d => d === '');
            if (idx !== -1) {
                const newCode = [...code];
                newCode[idx] = key;
                setCode(newCode);
                setActiveIndex(idx < 3 ? idx + 1 : 3);
            }
        }
    }

    return (
        <Container>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <Octicons name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            <AuthTitle title='Enter verification code' />
            <AuthDescription description="We have sent the code verification to your mobile number " />
            <View style={styles.codeBoxesContainer}>
                {code.map((digit, idx) => (
                    <View
                        key={idx}
                        style={[
                            styles.codeBox,
                            idx === activeIndex ? styles.codeBoxActive : styles.codeBoxInactive,
                        ]}
                    >
                        <Text style={[styles.codeBoxText, idx === activeIndex ? styles.codeBoxTextActive : styles.codeBoxTextInactive]}>{digit || (idx === activeIndex ? '_' : '')}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.resendCode}>
                Resend Code
            </Text>

            <View style={styles.keypad}>
                <View style={styles.keyRow}>
                    {
                        ['1', '2', '3'].map(key => (
                            <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
                                <Text style={styles.keyText}>{key}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={styles.keyRow}>
                    {
                        ['4', '5', '6'].map(key => (
                            <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
                                <Text style={styles.keyText}>{key}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={styles.keyRow}>
                    {
                        ['7', '8', '9'].map(key => (
                            <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
                                <Text style={styles.keyText}>{key}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={styles.keyRow}>
                    {
                        ['*', '0', 'delete'].map(key => (
                            <TouchableOpacity key={key} style={styles.key} onPress={() => handleKeyPress(key)}>
                                {key === 'delete' ? <Feather name="delete" size={24} color="black" /> : <Text style={styles.keyText}>{key}</Text>}
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            <Button
                title='Verify Accounts'
                type='filled'
                size='full'
                onPress={() => {
                    router.push('/success')
                }}
                style={styles.verifyAccounts}
            />
        </Container>
    )
}

export default VerificationCode

const styles = StyleSheet.create({
    backBtn: {
        height: 40,
        width: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#EDF2F7',
        borderWidth: 1,
    },
    codeBoxesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 24,
    },
    codeBox: {
        width: 56,
        height: 56,
        borderRadius: 12,
        borderWidth: 2,
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    codeBoxActive: {
        borderColor: '#38E6B0',
    },
    codeBoxInactive: {
        borderColor: '#E2E8F0',
    },
    codeBoxText: {
        fontSize: 28,
        fontFamily: 'Inter18Medium',
        color: '#2D3748',
    },
    codeBoxTextActive: {
        color: '#38E6B0',
    },
    codeBoxTextInactive: {
        color: '#2D3748',
    },
    keypad: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 24,
        marginHorizontal: 'auto'
    },
    keyRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    key: {
        width: '33%',
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: 'center',
    },
    keyText: {
        fontSize: 24,
        fontFamily: 'Inter18Medium',
        color: '#2D3748',
    },
    verifyAccounts: {
        marginBottom: 24,
    },
    resendCode: {
        textAlign: 'center',
        color: '#38E6B0',
        fontFamily: 'Inter18Bold',
        marginBottom: 24,
        fontSize: 14,
    }
})