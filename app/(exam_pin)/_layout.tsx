import { Stack } from 'expo-router';
import React from 'react';

import BackButton from '@/components/common/BackButton';
import { FontFamily, fontSize } from '@/theme/fonts';
import convertFontValueToNumber from '@/utils/fontConverter';

export default function ExamPinLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerLeft: () => <BackButton />,
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Exam Pin',
          headerTitleStyle: {
            fontFamily: FontFamily['Satoshi-Bold'],
            fontSize: convertFontValueToNumber(fontSize.xl),
          },
        }}
      />
    </Stack>
  );
}
