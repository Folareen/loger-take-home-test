
import { Stack, router } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useLayoutEffect, useState } from 'react';
import 'react-native-reanimated';
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded] = useFonts({
    Inter18Black: require("../assets/fonts/Inter_18pt-Black.ttf"),
    Inter18Bold: require("../assets/fonts/Inter_18pt-Bold.ttf"),
    Inter18Light: require("../assets/fonts/Inter_18pt-Light.ttf"),
    Inter18Medium: require("../assets/fonts/Inter_18pt-Medium.ttf"),
    Inter18Regular: require("../assets/fonts/Inter_18pt-Regular.ttf"),
    Inter18SemiBold: require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useLayoutEffect(() => {
    (async () => {
      const hasOnboarded = await AsyncStorage.getItem('onboardingComplete')
      if (hasOnboarded === 'true') {
        router.replace('/signup');
      } else {
        router.replace('/onboarding');
      }
    })();

  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar style='dark' />
    </>
  );
}
