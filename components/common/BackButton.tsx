import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, Pressable } from 'react-native';

import Colors from '@/theme/colors';

export default function BackButton({ color = Colors.black[400] }: { color?: string }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.back();
      }}
      className="flex-row items-center">
      <MaterialIcons name="keyboard-arrow-left" size={32} color={color} />
    </Pressable>
  );
}
