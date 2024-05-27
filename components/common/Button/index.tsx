import { Pressable } from 'react-native';

import { pixelSizeVertical as sv } from '@/theme/layout';

interface ButtonProps {
  bgColor: string;
  onPress: (() => void) | null;
  children: React.ReactNode;
  additionalClassNames?: string;
  additionalStyles?: any;
}

export default function Button({
  bgColor,
  onPress,
  children,
  additionalClassNames,
  additionalStyles,
}: ButtonProps) {
  return (
    <Pressable
      className={`${additionalClassNames} ${bgColor} rounded-xl ${bgColor.includes('white') && 'border-black-50 border'} items-center justify-center`}
      onPress={onPress}
      disabled={onPress === null}
      style={[
        {
          paddingVertical: sv(20),
        },
        additionalStyles,
      ]}
      accessibilityLabel="button">
      {children}
    </Pressable>
  );
}
