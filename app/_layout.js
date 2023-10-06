import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Slot } from 'expo-router';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import IconsPack from './../assets/icons/IconsPack';
import { default as customMapping } from './../constants/mapping.json';
import { default as customTheme } from './../constants/app-theme.json';

export default function Layout() {
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
