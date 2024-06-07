import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Colors from '@/theme/colors';

export default function HistoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: Colors.primary.DEFAULT },
          headerShadowVisible: false,
          headerTitle: '',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
