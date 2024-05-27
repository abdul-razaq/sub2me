import '../global.css';
import 'expo-dev-client';
import { Asset } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  return <Slot />;
}

function cacheImages(images: string[]) {
  return images.map((image: string) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    'Satoshi-Black': require('../assets/fonts/Satoshi-Black.otf'),
    'Satoshi-BlackItalic': require('../assets/fonts/Satoshi-BlackItalic.otf'),
    'Satoshi-Bold': require('../assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-BoldItalic': require('../assets/fonts/Satoshi-BoldItalic.otf'),
    'Satoshi-Italic': require('../assets/fonts/Satoshi-Italic.otf'),
    'Satoshi-Light': require('../assets/fonts/Satoshi-Light.otf'),
    'Satoshi-LightItalic': require('../assets/fonts/Satoshi-LightItalic.otf'),
    'Satoshi-Medium': require('../assets/fonts/Satoshi-Medium.otf'),
    'Satoshi-MediumItalic': require('../assets/fonts/Satoshi-MediumItalic.otf'),
    'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
  });

  React.useEffect(() => {
    (async () => {
      await Promise.all(cacheImages([]));
    })();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <InitialLayout />
    </GestureHandlerRootView>
  );
}
