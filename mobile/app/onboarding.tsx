import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Container from '@/components/Container'
import Button from '@/components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

const Onboarding = () => {
    const [stage, setStage] = useState(1)

    const completeOnboarding = async () => {
        await AsyncStorage.setItem('onboardingComplete', 'true')
    }

    const gotoLogin = () => {
        completeOnboarding()
        router.replace('/login')
    }

    const gotoSignup = () => {
        completeOnboarding()
        router.replace('/signup')
    }

    return (
        <Container>
            <Text style={styles.skip} onPress={gotoSignup}>Skip</Text>
            <View>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} onScroll={event => {
                    const pageWidth = Dimensions.get('window').width - 50;
                    const offsetX = event.nativeEvent.contentOffset.x;
                    const currentPage = Math.round(offsetX / pageWidth) + 1;
                    setStage(currentPage);
                }}>
                    <View style={styles.content}>
                        <Image style={styles.image} source={require('../assets/images/onboarding-stage-1.png')} resizeMode='contain' />
                        <Text style={styles.title}>
                            Investing for Everybody
                        </Text>
                        <Text style={styles.description}>
                            We let you easily invest in fractional shares for as little as <Text style={styles.dollarSign}>$1</Text>.
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <Image style={styles.image} source={require('../assets/images/onboarding-stage-2.png')} resizeMode='contain' />
                        <Text style={styles.title}>
                            Get Better Returns
                        </Text>
                        <Text style={styles.description}>
                            Invest in the world's leading brands and unlock amazing returns.
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.indicatorContainer}>
                <View style={[styles.indicator, stage === 1 ? styles.indicator1 : styles.indicator2]} />
            </View>

            <View style={styles.btns}>
                <Button type='outlined' title='Log In' onPress={gotoLogin} size='half' />
                <Button type='filled' title='Get Started' onPress={gotoSignup} size='half' />
            </View>

        </Container >
    )
}

export default Onboarding

const styles = StyleSheet.create({
    skip: {
        color: '#33D49D',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'right',
        fontFamily: 'Inter18Medium',
    },
    content: {
        flex: 1,
        width: Dimensions.get('window').width - 50,
        alignItems: 'center'
    },
    image: {
        resizeMode: 'contain',
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width - 50,
    },
    title: {
        color: '#2D3748',
        fontSize: 24,
        fontFamily: 'Inter18Bold',
    },
    description: {
        fontSize: 16,
        color: '#A0AEC0',
        fontFamily: 'Inter18Regular',
        wordWrap: 'break-word',
        textAlign: 'center',
        marginVertical: 16
    },
    dollarSign: {
        color: '#33D49D', fontFamily: 'Inter18SemiBold'
    },
    indicatorContainer: {
        width: 50,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#EDF2F7',
        marginHorizontal: 'auto',
        marginBottom: 16,
        marginTop: 'auto'
    },
    indicator: {
        width: 25,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#33D49D',
        marginHorizontal: 5,
    },
    indicator1: {
        marginLeft: 0,
    },
    indicator2: {
        marginLeft: 25
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    }
})