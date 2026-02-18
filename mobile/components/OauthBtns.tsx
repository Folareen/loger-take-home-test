
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { router, usePathname } from 'expo-router';

const OauthBtns = () => {
    const pathname = usePathname().split('/')[1]
    return (
        <View style={styles.container}>
            <View style={styles.dividerRow}>
                <View style={styles.divider} />
                <Text style={styles.orText}>Or {pathname == 'login' ? 'login' : 'continue'} with</Text>
                <View style={styles.divider} />
            </View>
            <View style={styles.btnRow}>
                <TouchableOpacity style={styles.oauthBtn} activeOpacity={0.7}>
                    <Image source={require('../assets/images/google.png')} style={styles.icon} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oauthBtn} activeOpacity={0.7}>
                    <Image source={require('../assets/images/apple.png')} style={styles.icon} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OauthBtns

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 'auto',
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#E2E8F0',
    },
    orText: {
        marginHorizontal: 12,
        color: '#A0AEC0',
        fontSize: 14,
        fontFamily: 'Inter18Regular',
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    oauthBtn: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16
    },
    icon: {
        width: 24,
        height: 24,
    },
});