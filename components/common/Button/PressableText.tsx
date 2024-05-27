import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text } from 'react-native';

import Colors from '@/theme/colors';

export default function PressableText({
  text,
  onPress,
  hasIcon = true,
}: {
  text: string;
  onPress: () => void;
  hasIcon?: boolean;
}) {
  return (
    <Pressable className="flex-row gap-2 items-center mt-6" onPress={onPress}>
      <Text className="font-Satoshi-Medium text-textColor text-base leading-normal tracking-normal">
        {text}
      </Text>
      {hasIcon && <MaterialIcons name="keyboard-arrow-right" size={24} />}
    </Pressable>
  );
}
