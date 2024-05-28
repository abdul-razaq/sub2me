import { Stack, useRouter } from 'expo-router';
import { ArrowLeft } from 'iconsax-react-native';
import React from 'react';
import { Pressable } from 'react-native';

import Colors from '@/theme/colors';

export default function AuthStack() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: '',
        headerLeft: () => (
          <Pressable onPress={() => router.canGoBack() && router.back()}>
            <ArrowLeft size={24} color={Colors.black[600]} />
          </Pressable>
        ),
      }}>
      <Stack.Screen name="index" options={{ headerLeft: undefined }} />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="create-password" />
      <Stack.Screen name="create-pin" />
      <Stack.Screen name="confirm-pin" />
    </Stack>
  );
}
