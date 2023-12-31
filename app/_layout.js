import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Slot } from 'expo-router';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import IconsPack from '../assets/icons/IconsPack';
import { default as customMapping } from '../constants/mapping.json';
import { default as customTheme } from '../constants/app-theme.json';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Thin100': require('./../assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Light300': require('./../assets/fonts/Roboto-Light.ttf'),
    'Roboto-Regular400': require('./../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium500': require('./../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold700': require('./../assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider >
      <IconRegistry icons={[IconsPack, EvaIconsPack]} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...customTheme }}
        customMapping={{ ...eva.mapping, ...customMapping }}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.container}>
          <Slot />
        </View>
      </ApplicationProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
