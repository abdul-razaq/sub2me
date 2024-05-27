import { Stack, useRouter } from 'expo-router';
import { ArrowLeft } from 'iconsax-react-native';
import React from 'react';

import Colors from '@/theme/colors';

export default function AuthStack() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: '',
        headerLeft: () => (
          <ArrowLeft
            size={24}
            color={Colors.black[600]}
            onPress={() => router.canGoBack() && router.back()}
          />
        ),
      }}>
      <Stack.Screen name="index" options={{ headerLeft: undefined }} />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
