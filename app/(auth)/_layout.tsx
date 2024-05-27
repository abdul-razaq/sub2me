import { Stack } from 'expo-router';
import React from 'react';

export default function AuthStack() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
