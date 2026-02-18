import AuthDescription from '@/components/AuthDescription';
import AuthTitle from '@/components/AuthTitle';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountrySelect from 'react-native-country-select';


const VerificationPhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);

    const handleCountrySelect = (country: any) => {
        setSelectedCountry(country);
    };

    const handleKeyPress = (key: string) => {
        if (key === 'delete') {
            setPhoneNumber(prev => prev.slice(0, -1));
        } else {
            setPhoneNumber(prev => prev + key);
        }
    }

    return (
        <Container>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <Octicons name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            <AuthTitle title='Enter your phone number' />
            <AuthDescription description="You'll receive a 4 digit code for the phone number verification" />
            <View style={styles.phoneInputContainer}>
                <TouchableOpacity style={styles.countryCode} onPress={() => setShowCountryPicker(true)}>
                    <Text>{selectedCountry?.flag || '🇱🇷'}</Text>
                    <Entypo name="chevron-down" size={16} color="rgba(45, 55, 72, 1)" />
                </TouchableOpacity>
                <TextInput placeholderTextColor={'#A0AEC0'} style={styles.phoneInput} showSoftInputOnFocus={false} placeholder={`${selectedCountry?.idd?.root || '+1'}-000-000-000`} value={phoneNumber} onChangeText={(text) => {
                    setPhoneNumber(text)
                }} />
            </View>

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
            <Button title='Send Code' type='filled' size='full' onPress={() => {
                router.push('/verification-code')
            }} style={styles.sendBtn} />

            <CountrySelect
                visible={showCountryPicker}
                onClose={() => setShowCountryPicker(false)}
                onSelect={handleCountrySelect}
            />
        </Container>
    )
}

export default VerificationPhoneNumber

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
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        borderWidth: 1,
        paddingVertical: 12
    },
    countryCode: {
        paddingHorizontal: 12,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        borderRightWidth: 1,
        borderRightColor: '#E2E8F0',
    },
    phoneInput: {
        color: '#2D3748',
        paddingHorizontal: 16,
        paddingVertical: 6,
        fontSize: 14,
        fontFamily: 'Inter18Regular',
        flex: 1,
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
    sendBtn: {
        marginBottom: 24,
    }
})